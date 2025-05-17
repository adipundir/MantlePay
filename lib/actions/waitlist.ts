'use server';

import { db } from "@/lib/db";
import { waitlist } from "@/lib/db/schema";
import { revalidatePath } from "next/cache";

export type WaitlistFormData = {
  name?: string;
  email: string;
  company?: string;
};

export type WaitlistResponse = {
  success: boolean;
  message: string;
  data?: any;
};

export async function addToWaitlist(formData: WaitlistFormData): Promise<WaitlistResponse> {
  try {
    const { email, name, company } = formData;
    
    if (!email) {
      return {
        success: false,
        message: 'Email is required',
      };
    }

    // Insert the new waitlist entry
    const newEntry = await db.insert(waitlist).values({
      email,
      name,
      company,
    }).returning();

    // Revalidate the page to show updated data
    revalidatePath('/');

    return {
      success: true,
      message: 'Successfully added to waitlist',
      data: newEntry[0],
    };
  } catch (error: any) {
    // Handle unique constraint violation (duplicate email)
    if (error.code === '23505') {
      return {
        success: false,
        message: 'Email already exists in our waitlist',
      };
    }

    console.error('Waitlist error:', error);
    return {
      success: false,
      message: 'Something went wrong',
    };
  }
} 