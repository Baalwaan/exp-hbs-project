BEGIN;

DROP TABLE IF EXISTS gym CASCADE;

create table gym (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	gym_name VARCHAR(100) NOT NULL,
	workout_duration VARCHAR(20) NOT NULL,
    favourite_workout VARCHAR(50) NOT NULL,
	time_stamp VARCHAR(100)
);
insert into gym (name, gym_name, workout_duration, favourite_workout, time_stamp) values ('Merola', 'Pure Gym', '45-60 Min', 'Chest Press', now()),('Mesut', 'Northampton leisure center', '30-45 Min', 'Arms', now()),('Abid', 'Virgin Gym', 'over 1.5Hr', 'Squats', now());

COMMIT;
