select * from crime_scene_report
where date = 20180115 and type 'murder' and city='SQL City'

select * from person
where address_street_name='Northwestern Dr'
order by address_number desc

select * from person
where address_street_name='Franklin Ave'
order by name asc

select * from interview
where person_id=14887 or person_id=16371

select member.name,member.person_id, checkin.* ,plate_number from get_fit_now_member member
join get_fit_now_check_in checkin on member.id=checkin.membership_id
join person on member.person_id=person.id
join drivers_license on drivers_license.id=person.license_id
where check_in_date=20180109
order by member.name asc

select * from interview
where person_id=67318

select person.id,name,annual_income from drivers_license
join person on drivers_license.id=person.license_id
join income on income.ssn=person.ssn
where car_make='Tesla'and car_model='Model S' and gender='female' and height>64 and height<68

select person.name,event_name,date from facebook_event_checkin
join person on person.id=facebook_event_checkin.person_id
where person_id=78881 or person_id=99716

-- Miranda Priestly and Jeremy Bowers