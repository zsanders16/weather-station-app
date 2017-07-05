CREATE TABLE weather
(
	id serial primary key,
	celsius integer NOT NULL,
	fahrenheit integer NOT NULL,
	kelvin integer NOT NULL,
	date_time date NOT NULL
)
ALTER TABLE weather DROP COLUMN date_time;
ALTER TABLE weather ADD COLUMN created_at TIMESTAMP DEFAULT NOW();	
