CREATE TABLE "waitlist" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"name" varchar(255),
	"company" varchar(255),
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "waitlist_email_unique" UNIQUE("email")
);
