create database hogwash;

create table
    house (id serial primary key, name varchar(50));

create table
    student (
        id serial primary key,
        name varchar(100),
        house_id int,
        foreign key (house_id) references house (id)
    );

create table
    subject (id serial primary key, name varchar(50));

create table
    teacher (
        id serial primary key,
        name varchar(100),
        house_id int,
        foreign key (house_id) references house (id)
    );

create table
    teacher_subject (
        id serial primary key,
        teacher_id int,
        subject_id int,
        foreign key (teacher_id) references teacher (id),
        foreign key (subject_id) references subject (id)
    );

create table
    spell (
        id serial primary key,
        name varchar(50),
        subject_id int,
        foreign key (subject_id) references subject (id)
    );

insert into
    houses (name)
values
    ("griffingdor"),
    ("slitherin"),
    ("hufflepuff"),
    ("ravenclaw");

insert into
    student (name, house_id)
values
    ("Harry Potter", 1),
    ("Draco Malfoy", 2),
    ("Luna Lovegood", 3),
    ("Margaret Thatcher", 4);

insert into
    subject (name)
values
    ("potions"),
    ("defence"),
    ("offence"),
    ("beasts");

insert into
    teacher (name)
values
    ("Severus Snape",2),
    ("Minerva McGonagall",4),
    ("Remo Lupin",3),
    ("Rúbeo Hagrid",1);

insert into
    teacher_subject (teacher_id, subject_id)
values
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (1, 2);

insert into
    spell (name, subject_id)
values
    ("Avada Kedavra", 3),
    ("Stupefy", 3),
    ("Wingardium Leviosa", 2),
    ("Expeliarmus", 2);

----------

select student.name,house.name from student
join house on student.house_id=house.id