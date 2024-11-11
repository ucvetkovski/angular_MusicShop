-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 25, 2024 at 05:44 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `orangesky`
--

-- --------------------------------------------------------

--
-- Table structure for table `albums`
--

CREATE TABLE `albums` (
  `id_album` int(10) NOT NULL,
  `title` varchar(50) NOT NULL,
  `id_artist` int(10) NOT NULL,
  `id_format` int(10) NOT NULL,
  `in_stock` int(10) NOT NULL,
  `id_price` int(10) NOT NULL,
  `release_year` int(10) NOT NULL,
  `id_record_label` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `albums`
--

INSERT INTO `albums` (`id_album`, `title`, `id_artist`, `id_format`, `in_stock`, `id_price`, `release_year`, `id_record_label`) VALUES
(1, '1989 (Taylor\'s Version)', 1, 1, 26, 62, 2023, 2),
(2, 'Midnights', 1, 2, 39, 4, 2022, 2),
(3, 'Blood of the Saints', 9, 2, 14, 3, 2011, 3),
(4, 'Cowboy Carter', 2, 1, 12, 8, 2024, 6),
(5, 'Sacrament of Sin', 9, 2, 20, 3, 2018, 3),
(6, 'Ctrl', 10, 1, 16, 7, 2022, 8),
(7, 'Lover', 1, 1, 5, 7, 2019, 2),
(8, 'Anti', 5, 2, 19, 4, 2016, 5),
(9, 'Hollywood\'s Bleeding', 6, 2, 17, 3, 2019, 2),
(10, 'Future Nostalgia', 8, 1, 11, 8, 2020, 8),
(11, 'Joanne', 7, 2, 18, 2, 2016, 7),
(12, 'Blessed and Possesed', 9, 1, 33, 8, 2015, 3);

-- --------------------------------------------------------

--
-- Table structure for table `album_genres`
--

CREATE TABLE `album_genres` (
  `id_album` int(10) NOT NULL,
  `id_genre` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `album_genres`
--

INSERT INTO `album_genres` (`id_album`, `id_genre`) VALUES
(1, 9),
(2, 1),
(2, 8),
(2, 9),
(3, 10),
(4, 12),
(5, 10),
(6, 2),
(6, 4),
(7, 6),
(7, 8),
(7, 9),
(8, 1),
(8, 2),
(8, 3),
(8, 4),
(8, 5),
(9, 1),
(9, 5),
(10, 1),
(10, 3),
(10, 8),
(10, 9),
(11, 1),
(11, 3),
(11, 11),
(12, 10);

-- --------------------------------------------------------

--
-- Table structure for table `artists`
--

CREATE TABLE `artists` (
  `id_artist` int(10) NOT NULL,
  `artist_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `artists`
--

INSERT INTO `artists` (`id_artist`, `artist_name`) VALUES
(1, 'Taylor Swift'),
(2, 'Beyoncé'),
(3, 'Britney Spears'),
(4, 'Adele'),
(5, 'Rihanna'),
(6, 'Post Malone'),
(7, 'Lady Gaga'),
(8, 'Dua Lipa'),
(9, 'Powerwolf'),
(10, 'SZA');

-- --------------------------------------------------------

--
-- Table structure for table `formats`
--

CREATE TABLE `formats` (
  `id_format` int(10) NOT NULL,
  `format_name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `formats`
--

INSERT INTO `formats` (`id_format`, `format_name`) VALUES
(1, 'Vinyl'),
(2, 'CD');

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `id_genre` int(10) NOT NULL,
  `genre_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`id_genre`, `genre_name`) VALUES
(1, 'Pop'),
(2, 'R&B'),
(3, 'Dance'),
(4, 'Soul'),
(5, 'Hip Hop'),
(6, 'Pop-Rock'),
(7, 'Rap-Rock'),
(8, 'Electronic'),
(9, 'Synth-pop'),
(10, 'Metal'),
(11, 'Rock'),
(12, 'Country-pop');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id_image` int(10) NOT NULL,
  `path` varchar(255) NOT NULL,
  `id_album` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id_image`, `path`, `id_album`) VALUES
(1, 'https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png', 1),
(2, 'https://upload.wikimedia.org/wikipedia/en/9/9f/Midnights_-_Taylor_Swift.png', 2),
(3, 'https://upload.wikimedia.org/wikipedia/en/b/bf/SZA_-_Ctrl_cover.png', 6),
(4, 'https://upload.wikimedia.org/wikipedia/en/3/32/Blood_of_the_Saints.jpg', 3),
(5, 'https://upload.wikimedia.org/wikipedia/en/a/aa/Beyonc%C3%A9_-_Cowboy_Carter.png', 4),
(6, 'https://upload.wikimedia.org/wikipedia/en/0/01/Cover_art_for_Powerwolf%E2%80%99s_seventh_album%2C_The_Sacrament_of_Sin.jpeg', 5),
(7, 'https://upload.wikimedia.org/wikipedia/en/c/cd/Taylor_Swift_-_Lover.png', 7),
(8, 'https://lastfm.freetls.fastly.net/i/u/ar0/cda164f3536abdd097fc506cbf51be07.jpg', 8),
(9, 'https://upload.wikimedia.org/wikipedia/en/5/58/Post_Malone_-_Hollywood%27s_Bleeding.png', 9),
(10, 'https://upload.wikimedia.org/wikipedia/en/f/f5/Dua_Lipa_-_Future_Nostalgia_%28Official_Album_Cover%29.png', 10),
(11, 'https://upload.wikimedia.org/wikipedia/en/f/fd/Lady_Gaga_-_Joanne_%28Official_Album_Cover%29.png', 11),
(12, 'https://upload.wikimedia.org/wikipedia/en/8/81/Powerwolf_-_Blessed_%26_Possessed.jpg', 12);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id_order` int(10) NOT NULL,
  `id_user` int(10) DEFAULT NULL,
  `buyer` varchar(60) DEFAULT NULL,
  `shipping_address` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id_order`, `id_user`, `buyer`, `shipping_address`, `created_at`) VALUES
(30, 2, 'user@gmail.com', '784 Melrose Street', '2024-06-24 22:03:36'),
(31, 8, 'boyce@gmail.com', 'Address, South California', '2024-06-25 04:04:01'),
(32, NULL, 'paulru@gmail.com', 'Random St, San Diego, California', '2024-06-25 04:15:22');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id_order` int(10) NOT NULL,
  `id_album` int(10) NOT NULL,
  `quantity` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id_order`, `id_album`, `quantity`) VALUES
(30, 6, 4),
(31, 1, 4),
(31, 2, 3),
(31, 7, 2),
(31, 11, 1),
(31, 12, 1),
(32, 3, 2),
(32, 5, 1),
(32, 9, 1);

-- --------------------------------------------------------

--
-- Table structure for table `prices`
--

CREATE TABLE `prices` (
  `id_price` int(10) NOT NULL,
  `value` decimal(20,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prices`
--

INSERT INTO `prices` (`id_price`, `value`) VALUES
(1, '12.99'),
(2, '14.99'),
(3, '18.99'),
(4, '19.99'),
(5, '24.99'),
(6, '29.99'),
(7, '39.99'),
(8, '49.99'),
(62, '59.99');

-- --------------------------------------------------------

--
-- Table structure for table `record_labels`
--

CREATE TABLE `record_labels` (
  `id_label` int(10) NOT NULL,
  `label_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `record_labels`
--

INSERT INTO `record_labels` (`id_label`, `label_name`) VALUES
(1, 'Big Machine Records'),
(2, 'Republic Records'),
(3, 'RCA'),
(4, 'Interscope'),
(5, 'Def Jam Recordings'),
(6, 'Columbia Records'),
(7, 'Jive'),
(8, 'Parkwood Entertainment');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id_role` int(10) NOT NULL,
  `role_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id_role`, `role_name`) VALUES
(1, 'admin'),
(2, 'user');

-- --------------------------------------------------------

--
-- Table structure for table `tracks`
--

CREATE TABLE `tracks` (
  `id_track` int(10) NOT NULL,
  `track_title` varchar(255) NOT NULL,
  `duration` int(10) NOT NULL,
  `id_album` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tracks`
--

INSERT INTO `tracks` (`id_track`, `track_title`, `duration`, `id_album`) VALUES
(23, 'Welcome to New York (Taylor\'s Version)', 212, 1),
(24, 'Blank Space (Taylor\'s Version)', 231, 1),
(25, 'Style (Taylor\'s Version)', 231, 1),
(26, 'Out of the Woods (Taylor\'s Version)', 237, 1),
(27, 'All You Had to Do Was Stay (Taylor\'s Version)', 192, 1),
(28, 'Shake It Off (Taylor\'s Version)', 219, 1),
(29, 'I Wish You Would (Taylor\'s Version)', 207, 1),
(30, 'Bad Blood (Taylor\'s Version)', 211, 1),
(31, 'Wildest Dreams (Taylor\'s Version)', 220, 1),
(32, 'How You Get the Girl (Taylor\'s Version)', 246, 1),
(33, 'This Love (Taylor\'s Version)', 244, 1),
(34, 'I Know Places (Taylor\'s Version)', 208, 1),
(35, 'Clean (Taylor\'s Version)', 261, 1),
(36, 'Wonderland (Taylor\'s Version)', 254, 1),
(37, 'You Are In Love (Taylor\'s Version)', 245, 1),
(38, 'New Romantics (Taylor\'s Version)', 231, 1),
(39, 'Lavender Haze', 203, 2),
(40, 'Maroon', 198, 2),
(41, 'Anti-Hero', 200, 2),
(42, 'Snow on the Beach', 244, 2),
(43, 'You\'re on Your Own, Kid', 197, 2),
(44, 'Midnight Rain', 174, 2),
(45, 'Question...?', 210, 2),
(46, 'Vigilante Shit', 150, 2),
(47, 'Bejeweled', 202, 2),
(48, 'Labyrinth', 244, 2),
(49, 'Karma', 204, 2),
(50, 'Sweet Nothing', 212, 2),
(51, 'Mastermind', 191, 2),
(52, 'Agnus Dei', 86, 3),
(53, 'Sanctified with Dynamite', 257, 3),
(54, 'We Drink Your Blood', 229, 3),
(55, 'Murder at Midnight', 256, 3),
(56, 'All We Need is Blood', 221, 3),
(57, 'Dead Boys Don\'t Cry', 199, 3),
(58, 'Son of a Wolf', 237, 3),
(59, 'Night of the Werewolves', 270, 3),
(60, 'Phantom of the Funeral', 287, 3),
(61, 'Die, Die, Crucified', 234, 3),
(62, 'Ira Sancti (When the Saints are Going Wild)', 236, 3),
(63, 'American Requiem', 325, 4),
(64, 'Blackbiird', 131, 4),
(65, '16 Carriages', 227, 4),
(66, 'Protector', 184, 4),
(67, 'My Rose', 53, 4),
(68, 'Smoke Hour Willie Nelson', 50, 4),
(69, 'Texas Hold \'Em', 233, 4),
(70, 'Bodyguard', 240, 4),
(71, 'Dolly P', 22, 4),
(72, 'Jolene', 189, 4),
(73, 'Daughter', 203, 4),
(74, 'Spaghettii', 158, 4),
(75, 'Alligator Tears', 179, 4),
(76, 'Smoke Hour II', 29, 4),
(77, 'Just for Fun', 204, 4),
(78, 'II Most Wanted', 208, 4),
(79, 'Levii\'s Jeans', 257, 4),
(80, 'Flamenco', 100, 4),
(81, 'The Linda Martell Show', 28, 4),
(82, 'Ya Ya', 274, 4),
(83, 'Oh Louisiana', 52, 4),
(84, 'Desert Eagle', 72, 4),
(85, 'Riverdance', 251, 4),
(86, 'II Hands II Heaven', 341, 4),
(87, 'Tyrant', 250, 4),
(88, 'Sweet Honey Buckin\'', 296, 4),
(89, 'Amen', 145, 4),
(90, 'Fire & Forgive', 274, 5),
(91, 'Demons Are a Girl\'s Best Friend', 235, 5),
(92, 'Killers with the Cross', 240, 5),
(93, 'Incense & Iron', 235, 5),
(94, 'Where the Wild Wolves Have Gone', 314, 5),
(95, 'Stossgebet', 227, 5),
(96, 'Nightside of Siberia', 223, 5),
(97, 'The Sacrament of Sin', 271, 5),
(98, 'Venom of Venus', 217, 5),
(99, 'Nighttime Rebel', 264, 5),
(100, 'Fist by Fist (Sacralize or Strike)', 240, 5),
(101, 'Midnight Madonna', 264, 5),
(102, 'Cannonball', 202, 5),
(103, 'Supermodel', 221, 6),
(104, 'Love Galore (feat. Travis Scott)', 298, 6),
(105, 'Doves in the Wind (feat. Kendrick Lamar)', 245, 6),
(106, 'Drew Barrymore', 219, 6),
(107, 'Prom', 218, 6),
(108, 'The Weekend', 268, 6),
(109, 'Go Gina', 146, 6),
(110, 'Garden (Say It Like Dat)', 187, 6),
(111, 'Broken Clocks', 213, 6),
(112, 'Anything', 193, 6),
(113, 'Wavy (Interlude) [feat. James Fauntleroy]', 109, 6),
(114, 'Normal Girl', 258, 6),
(115, 'Pretty Little Birds (feat. Isaiah Rashad)', 222, 6),
(116, '20 Something', 212, 6),
(117, 'I Forgot That You Existed', 158, 7),
(118, 'Cruel Summer', 178, 7),
(119, 'Lover', 221, 7),
(120, 'The Man', 190, 7),
(121, 'The Archer', 213, 7),
(122, 'I Think He Knows', 139, 7),
(123, 'Miss Americana & The Heartbreak Prince', 212, 7),
(124, 'Paper Rings', 176, 7),
(125, 'Cornelia Street', 289, 7),
(126, 'Death By A Thousand Cuts', 191, 7),
(127, 'London Boy', 180, 7),
(128, 'Soon You’ll Get Better (feat. Dixie Chicks)', 215, 7),
(129, 'False God', 219, 7),
(130, 'You Need To Calm Down', 171, 7),
(131, 'Afterglow', 207, 7),
(132, 'ME! (feat. Brendon Urie of Panic! At The Disco)', 193, 7),
(133, 'It’s Nice To Have A Friend', 153, 7),
(134, 'Daylight', 261, 7),
(135, 'Consideration (feat. SZA)', 167, 8),
(136, 'James Joint', 89, 8),
(137, 'Kiss It Better', 260, 8),
(138, 'Work (feat. Drake)', 219, 8),
(139, 'Desperado', 186, 8),
(140, 'Woo', 214, 8),
(141, 'Needed Me', 193, 8),
(142, 'Yeah, I Said It', 121, 8),
(143, 'Same Ol’ Mistakes', 365, 8),
(144, 'Never Ending', 203, 8),
(145, 'Love on the Brain', 223, 8),
(146, 'Higher', 137, 8),
(147, 'Close to You', 187, 8),
(148, 'Hollywood’s Bleeding', 162, 9),
(149, 'Saint-Tropez', 160, 9),
(150, 'Enemies (feat. DaBaby)', 196, 9),
(151, 'Allergic', 158, 9),
(152, 'A Thousand Bad Times', 213, 9),
(153, 'Circles', 215, 9),
(154, 'Die for Me (feat. Future & Halsey)', 243, 9),
(155, 'On the Road (feat. Meek Mill & Lil Baby)', 213, 9),
(156, 'Take What You Want (feat. Ozzy Osbourne & Travis Scott)', 220, 9),
(157, 'I’m Gonna Be', 162, 9),
(158, 'Staring at the Sun (feat. SZA)', 157, 9),
(159, 'Sunflower (Spider-Man: Into the Spider-Verse) [with Swae Lee]', 158, 9),
(160, 'Internet', 134, 9),
(161, 'Goodbyes (feat. Young Thug)', 175, 9),
(162, 'Myself', 158, 9),
(163, 'I Know', 176, 9),
(164, 'Wow.', 149, 9),
(165, 'Future Nostalgia', 191, 10),
(166, 'Don’t Start Now', 183, 10),
(167, 'Cool', 221, 10),
(168, 'Physical', 217, 10),
(169, 'Levitating', 203, 10),
(170, 'Pretty Please', 197, 10),
(171, 'Hallucinate', 178, 10),
(172, 'Love Again', 219, 10),
(173, 'Break My Heart', 221, 10),
(174, 'Good in Bed', 209, 10),
(175, 'Boys Will Be Boys', 165, 10),
(176, 'Diamond Heart', 203, 11),
(177, 'A-YO', 193, 11),
(178, 'Joanne', 210, 11),
(179, 'John Wayne', 176, 11),
(180, 'Dancin’ In Circles', 205, 11),
(181, 'Perfect Illusion', 174, 11),
(182, 'Million Reasons', 229, 11),
(183, 'Sinner’s Prayer', 197, 11),
(184, 'Come To Mama', 243, 11),
(185, 'Hey Girl (feat. Florence Welch)', 248, 11),
(186, 'Angel Down', 191, 11),
(187, 'Grigio Girls', 200, 11),
(188, 'Just Another Day', 228, 11),
(190, 'Blessed & Possessed', 245, 12),
(191, 'Dead Until Dark', 214, 12),
(192, 'Army of the Night', 230, 12),
(193, 'Armata Strigoi', 240, 12),
(194, 'We Are the Wild', 250, 12),
(195, 'Higher Than Heaven', 239, 12),
(196, 'Christ & Combat', 238, 12),
(197, 'Sanctus Dominus', 234, 12),
(198, 'Sacramental Sister', 229, 12),
(199, 'All You Can Bleed', 207, 12),
(200, 'Let There Be Night', 546, 12);

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id_transaction` int(10) NOT NULL,
  `id_order` int(10) NOT NULL,
  `card_number` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id_transaction`, `id_order`, `card_number`) VALUES
(10, 30, '1222332211233123'),
(11, 31, '9872658410029765'),
(12, 32, '9612584733002189');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(10) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(60) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `id_role` int(10) NOT NULL DEFAULT 2,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `first_name`, `last_name`, `email`, `phone`, `password`, `address`, `id_role`, `created_at`) VALUES
(1, 'Russell ', 'Gideon', 'admin@gmail.com', '0682938821', '21232f297a57a5a743894a0e4a801fc3', '691 Saint James Drive', 1, '2024-06-23 12:07:31'),
(2, 'Scott', 'Wright', 'user@gmail.com', '0639748210', 'ee11cbb19052e40b07aac0ca060c23ee', '784 Melrose Street', 2, '2024-06-23 12:11:17'),
(3, 'Dorothy', 'Rayford', 'marta1987@gmail.com', '0612749201', 'ee11cbb19052e40b07aac0ca060c23ee', '4544 Sherman Street', 2, '2024-06-23 12:11:17'),
(4, 'Jackeline', 'Truss', 'rubye19981998@hotmail.com', '0648293190', 'ee11cbb19052e40b07aac0ca060c23ee', '3084 Camden Street', 2, '2024-06-23 12:11:17'),
(5, 'George', 'Craig', 'maryam_trom9@hotmail.com', '0607123801', 'ee11cbb19052e40b07aac0ca060c23ee', '3308 Maple Court', 2, '2024-06-23 12:11:17'),
(6, 'Trisha', 'Paytas', 'trisha@gmail.com', NULL, '5af7a513a7c48f6cc97253254b29509b', 'Riverside, California', 2, '2024-06-24 17:41:50'),
(7, 'Jenna', 'Marbles', 'jenna.m@gmail.com', '', 'a9726dca1f70894106b530ebcf7457a4', 'Rocherster, New York', 2, '2024-06-24 17:43:25'),
(8, 'Cynthia', 'Boyce', 'boyce@gmail.com', '92839219203', '2f2e0609ba779da2594827c434a0af0d', 'Address, South California', 2, '2024-06-24 17:47:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`id_album`),
  ADD UNIQUE KEY `title` (`title`),
  ADD KEY `id_artist` (`id_artist`),
  ADD KEY `id_format` (`id_format`),
  ADD KEY `id_price` (`id_price`),
  ADD KEY `id_record_label` (`id_record_label`);

--
-- Indexes for table `album_genres`
--
ALTER TABLE `album_genres`
  ADD PRIMARY KEY (`id_album`,`id_genre`),
  ADD KEY `id_album` (`id_album`),
  ADD KEY `id_genre` (`id_genre`);

--
-- Indexes for table `artists`
--
ALTER TABLE `artists`
  ADD PRIMARY KEY (`id_artist`);

--
-- Indexes for table `formats`
--
ALTER TABLE `formats`
  ADD PRIMARY KEY (`id_format`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id_genre`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id_image`),
  ADD KEY `album_id` (`id_album`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id_order`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id_order`,`id_album`),
  ADD KEY `id_order` (`id_order`),
  ADD KEY `id_album` (`id_album`);

--
-- Indexes for table `prices`
--
ALTER TABLE `prices`
  ADD PRIMARY KEY (`id_price`);

--
-- Indexes for table `record_labels`
--
ALTER TABLE `record_labels`
  ADD PRIMARY KEY (`id_label`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id_role`);

--
-- Indexes for table `tracks`
--
ALTER TABLE `tracks`
  ADD PRIMARY KEY (`id_track`),
  ADD KEY `id_album` (`id_album`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id_transaction`),
  ADD KEY `id_order` (`id_order`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone` (`phone`),
  ADD KEY `id_role` (`id_role`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `albums`
--
ALTER TABLE `albums`
  MODIFY `id_album` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `artists`
--
ALTER TABLE `artists`
  MODIFY `id_artist` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `formats`
--
ALTER TABLE `formats`
  MODIFY `id_format` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id_genre` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id_image` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id_order` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `prices`
--
ALTER TABLE `prices`
  MODIFY `id_price` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `record_labels`
--
ALTER TABLE `record_labels`
  MODIFY `id_label` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id_role` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tracks`
--
ALTER TABLE `tracks`
  MODIFY `id_track` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=201;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id_transaction` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `albums`
--
ALTER TABLE `albums`
  ADD CONSTRAINT `albums_ibfk_1` FOREIGN KEY (`id_artist`) REFERENCES `artists` (`id_artist`),
  ADD CONSTRAINT `albums_ibfk_2` FOREIGN KEY (`id_record_label`) REFERENCES `record_labels` (`id_label`),
  ADD CONSTRAINT `albums_ibfk_3` FOREIGN KEY (`id_price`) REFERENCES `prices` (`id_price`),
  ADD CONSTRAINT `albums_ibfk_4` FOREIGN KEY (`id_format`) REFERENCES `formats` (`id_format`);

--
-- Constraints for table `album_genres`
--
ALTER TABLE `album_genres`
  ADD CONSTRAINT `album_genres_ibfk_1` FOREIGN KEY (`id_genre`) REFERENCES `genres` (`id_genre`),
  ADD CONSTRAINT `album_genres_ibfk_2` FOREIGN KEY (`id_album`) REFERENCES `albums` (`id_album`);

--
-- Constraints for table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`id_album`) REFERENCES `albums` (`id_album`) ON DELETE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION;

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`id_order`) REFERENCES `orders` (`id_order`),
  ADD CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`id_album`) REFERENCES `albums` (`id_album`);

--
-- Constraints for table `tracks`
--
ALTER TABLE `tracks`
  ADD CONSTRAINT `tracks_ibfk_1` FOREIGN KEY (`id_album`) REFERENCES `albums` (`id_album`) ON DELETE CASCADE;

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`id_order`) REFERENCES `orders` (`id_order`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_role`) REFERENCES `roles` (`id_role`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
