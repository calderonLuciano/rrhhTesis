-- Seed data with a fake user for testing

insert into users (name, surname, email, joined, role) values ('admin', 'admin', 'admin@admin.com', '2018-01-01', 'ROLE_ADMIN');
insert into login (hash, email) values ('$2a$10$WAK21U0LWl7C//jJ.DOB2uPP1DJQh7KUDgasdyQeGzkop2Pzl8W7u', 'admin@admin.com');

