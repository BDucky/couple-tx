-- AlterTable
ALTER TABLE `posts` MODIFY `body` VARCHAR(1000) NOT NULL;

-- AlterTable
ALTER TABLE `products` MODIFY `product_references` VARCHAR(1000) NOT NULL,
    MODIFY `information` VARCHAR(1000) NOT NULL;
