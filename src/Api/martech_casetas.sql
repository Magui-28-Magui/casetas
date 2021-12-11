-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-12-2021 a las 01:44:45
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `martech_casetas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `agregar_visita_admin`
--

CREATE TABLE `agregar_visita_admin` (
  `id` int(11) NOT NULL,
  `visita_nombre` varchar(255) NOT NULL,
  `visita_contacto` varchar(255) NOT NULL,
  `visita_empresa` varchar(255) NOT NULL,
  `visita_entrada` datetime NOT NULL,
  `visita_fecha` datetime NOT NULL,
  `visita_proposito` varchar(255) NOT NULL,
  `planta_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `agregar_visita_admin`
--

INSERT INTO `agregar_visita_admin` (`id`, `visita_nombre`, `visita_contacto`, `visita_empresa`, `visita_entrada`, `visita_fecha`, `visita_proposito`, `planta_id`) VALUES
(36, 'Morimoto', 'Magui Campos', 'CERTUIT', '2021-12-10 15:40:23', '0000-00-00 00:00:00', 'Mantenimiento ', 0),
(37, 'Morimoto', 'test', 'Martech', '2021-12-10 15:43:41', '0000-00-00 00:00:00', 'Programador de planta', 0),
(38, 'Morimoto', 'Magui Campos', 'ICONOS', '2021-12-10 15:48:43', '0000-00-00 00:00:00', 'Mantenimiento ', 0),
(39, 'Morimoto', 'test', 'ICONOS', '2021-12-10 15:51:10', '0000-00-00 00:00:00', 'Consulta', 0),
(40, 'Aracely', 'Magui Campos', 'CERTUIT', '2021-12-10 15:52:29', '0000-00-00 00:00:00', 'Analisis', 0),
(41, 'Magui', 'test', 'CERTUIT', '2021-12-10 15:54:41', '0000-00-00 00:00:00', 'Analisis', 0),
(42, 'Test', 'test', 'test', '2021-12-10 16:00:21', '0000-00-00 00:00:00', 'test', 0),
(43, 'Jose Luis', 'test', 'Monobits', '2021-12-10 16:01:04', '0000-00-00 00:00:00', 'Programador de planta', 0),
(44, 'Morimoto', 'Jose Luis', 'CERTUIT', '2021-12-10 16:07:07', '0000-00-00 00:00:00', 'Mantenimiento ', 0),
(45, 'Morimoto', 'Jose Luis', 'CERTUIT', '2021-12-10 16:19:53', '0000-00-00 00:00:00', 'Analisis', 0),
(46, 'Aracely', 'Magui Campos', 'test', '2021-12-10 16:22:04', '0000-00-00 00:00:00', 'Programador de planta', 0),
(47, 'Morimoto', 'Jose Luis', 'test', '2021-12-10 16:27:16', '0000-00-00 00:00:00', 'Analisis', 0),
(48, 'Alejandra', 'Magui Campos', 'Mediamono', '2021-12-10 16:32:41', '0000-00-00 00:00:00', 'Medida', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresas`
--

CREATE TABLE `empresas` (
  `empresa_id` int(11) NOT NULL,
  `empresa_nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empresas`
--

INSERT INTO `empresas` (`empresa_id`, `empresa_nombre`) VALUES
(1, 'Martech Medical Products');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro_visitas`
--

CREATE TABLE `registro_visitas` (
  `visita_id` int(11) NOT NULL,
  `visita_tipo` varchar(255) NOT NULL,
  `planta_id` int(11) NOT NULL,
  `visita_nombre` varchar(255) NOT NULL,
  `visita_empresa` int(11) NOT NULL,
  `visita_contacto` varchar(255) DEFAULT NULL,
  `visita_proposito` varchar(255) DEFAULT NULL,
  `visita_fecha` date DEFAULT NULL,
  `visita_entrada` datetime DEFAULT NULL,
  `visita_salida` datetime DEFAULT NULL,
  `visit_time_stamp` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `registro_visitas`
--

INSERT INTO `registro_visitas` (`visita_id`, `visita_tipo`, `planta_id`, `visita_nombre`, `visita_empresa`, `visita_contacto`, `visita_proposito`, `visita_fecha`, `visita_entrada`, `visita_salida`, `visit_time_stamp`) VALUES
(148, 'Visita', 1, 'Jose luis Gomez Cecena', 1, 'Jmorimoto', 'Revision de PC', '2021-11-25', '2021-12-10 11:37:13', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL COMMENT 'auto incrementing user_id of each user, unique index',
  `user_name` varchar(64) COLLATE utf8_unicode_ci NOT NULL COMMENT 'user''s name, unique',
  `user_password_hash` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT 'user''s password in salted and hashed format',
  `user_email` varchar(64) COLLATE utf8_unicode_ci NOT NULL COMMENT 'user''s email, unique'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='user data';

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_password_hash`, `user_email`) VALUES
(1, 'jgomez', '$2y$10$kwlBBJLnQ8Xvg/hN8xswhODpifMgsRg5/mu6DrK.4U6tz0jiXgbWq', 'jgomez@martechmedical.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visitantes`
--

CREATE TABLE `visitantes` (
  `visitante_id` int(11) NOT NULL,
  `visitante_nombre` varchar(255) NOT NULL,
  `visitante_empresa` int(11) NOT NULL,
  `visitante_contacto` varchar(255) NOT NULL,
  `visitante_proposito` varchar(255) NOT NULL,
  `visitante_fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `visitantes`
--

INSERT INTO `visitantes` (`visitante_id`, `visitante_nombre`, `visitante_empresa`, `visitante_contacto`, `visitante_proposito`, `visitante_fecha`) VALUES
(1, 'Jose luis Gomez Cecena', 1, 'Jmorimoto', 'Revision de PC', '2021-11-25 18:30:15'),
(2, 'Socorro Tirado', 1, 'Contacto 2', 'Junta con administracion', '2021-11-25 17:30:15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visitas_fotos`
--

CREATE TABLE `visitas_fotos` (
  `foto_id` int(11) NOT NULL,
  `foto_url` varchar(255) NOT NULL,
  `foto_visita_id` int(11) NOT NULL,
  `foto_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `agregar_visita_admin`
--
ALTER TABLE `agregar_visita_admin`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `empresas`
--
ALTER TABLE `empresas`
  ADD PRIMARY KEY (`empresa_id`);

--
-- Indices de la tabla `registro_visitas`
--
ALTER TABLE `registro_visitas`
  ADD PRIMARY KEY (`visita_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_name` (`user_name`),
  ADD UNIQUE KEY `user_email` (`user_email`);

--
-- Indices de la tabla `visitantes`
--
ALTER TABLE `visitantes`
  ADD PRIMARY KEY (`visitante_id`);

--
-- Indices de la tabla `visitas_fotos`
--
ALTER TABLE `visitas_fotos`
  ADD PRIMARY KEY (`foto_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `agregar_visita_admin`
--
ALTER TABLE `agregar_visita_admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT de la tabla `empresas`
--
ALTER TABLE `empresas`
  MODIFY `empresa_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `registro_visitas`
--
ALTER TABLE `registro_visitas`
  MODIFY `visita_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=149;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'auto incrementing user_id of each user, unique index', AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `visitantes`
--
ALTER TABLE `visitantes`
  MODIFY `visitante_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `visitas_fotos`
--
ALTER TABLE `visitas_fotos`
  MODIFY `foto_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
