use login;
CREATE TABLE `users` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`name` varchar(45) NOT NULL,
`email` varchar(45) NOT NULL,
`password` varchar(60) NOT NULL,
`state` varchar(45) NOT NULL DEFAULT '1',
`createdAt` timestamp NULL DEFAULT NULL,
`updatedAt` timestamp NULL DEFAULT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
select * from users;
insert into users values(default,"Brayan Ortiz","brayanortiz1714@gmail.com","1234569",1,default, default);

