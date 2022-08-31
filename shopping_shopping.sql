

DROP TABLE IF EXISTS `shopping`.`items` ;

CREATE TABLE `shopping`.`items` (
    `id_item` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `quantity` VARCHAR(45) NOT NULL,
    `purchased` TINYINT(1) NULL,
    PRIMARY KEY (`id_item`)
    )ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `shopping`.`items` VALUES (1,'Pommes',10,0),(2,'Poires',2,1);

SELECT * FROM `shopping`.`items` ;
