CREATE TABLE `Credential` (
	`id` text PRIMARY KEY NOT NULL,
	`userId` text NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `User` (
	`id` text PRIMARY KEY NOT NULL
);
