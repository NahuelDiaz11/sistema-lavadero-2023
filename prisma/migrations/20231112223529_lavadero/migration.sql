-- CreateTable
CREATE TABLE `clientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(15) NULL,
    `apellido` VARCHAR(15) NULL,
    `id_localidad` INTEGER NULL,
    `dni` BIGINT NULL,
    `celular` BIGINT NULL,

    INDEX `id_localidad`(`id_localidad`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `localidades` (
    `id` INTEGER NOT NULL,
    `codigo_postal` INTEGER NULL,
    `nombre` VARCHAR(15) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `modelos` (
    `id` INTEGER NOT NULL,
    `nombre` VARCHAR(15) NULL,
    `tipo_vehiculo` INTEGER NULL,

    INDEX `tipo_vehiculo`(`tipo_vehiculo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `servicios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATE NULL,
    `hora_entrada` TIME(0) NULL,
    `hora_salida` TIME(0) NULL,
    `id_vehiculo` INTEGER NULL,
    `id_cliente` INTEGER NULL,

    INDEX `id_cliente`(`id_cliente`),
    INDEX `id_vehiculo`(`id_vehiculo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `servicios_tipos_servicios_tipos_vehiculos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `precio_total` INTEGER NULL,
    `id_servicio` INTEGER NULL,
    `id_tipo_servicio_vehiculo` INTEGER NULL,

    INDEX `id_servicio`(`id_servicio`),
    INDEX `id_tipo_servicio_vehiculo`(`id_tipo_servicio_vehiculo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipos_servicios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(25) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipos_servicios_tipos_vehiculos` (
    `id` INTEGER NOT NULL,
    `id_tipo_servicio` INTEGER NULL,
    `id_tipo_vehiculo` INTEGER NULL,

    INDEX `id_tipo_servicio`(`id_tipo_servicio`),
    INDEX `id_tipo_vehiculo`(`id_tipo_vehiculo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipos_vehiculos` (
    `id` INTEGER NOT NULL,
    `nombre` VARCHAR(15) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vehiculos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `patente` VARCHAR(7) NULL,
    `id_modelo` INTEGER NULL,

    INDEX `id_modelo`(`id_modelo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `apellido` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `pass` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `clientes` ADD CONSTRAINT `clientes_ibfk_1` FOREIGN KEY (`id_localidad`) REFERENCES `localidades`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `modelos` ADD CONSTRAINT `modelos_ibfk_1` FOREIGN KEY (`tipo_vehiculo`) REFERENCES `tipos_vehiculos`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `servicios` ADD CONSTRAINT `servicios_ibfk_2` FOREIGN KEY (`id_cliente`) REFERENCES `clientes`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `servicios_tipos_servicios_tipos_vehiculos` ADD CONSTRAINT `servicios_tipos_servicios_tipos_vehiculos_ibfk_2` FOREIGN KEY (`id_tipo_servicio_vehiculo`) REFERENCES `tipos_servicios_tipos_vehiculos`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tipos_servicios_tipos_vehiculos` ADD CONSTRAINT `tipos_servicios_tipos_vehiculos_ibfk_2` FOREIGN KEY (`id_tipo_vehiculo`) REFERENCES `tipos_vehiculos`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `vehiculos` ADD CONSTRAINT `vehiculos_ibfk_1` FOREIGN KEY (`id_modelo`) REFERENCES `modelos`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
