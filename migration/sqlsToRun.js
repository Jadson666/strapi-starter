const createStoreSql = `CREATE TABLE \`core_store\` (
  \`id\` int unsigned NOT NULL AUTO_INCREMENT,
  \`key\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`value\` longtext COLLATE utf8mb4_unicode_ci,
  \`type\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`environment\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`tag\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`;

const createAdminSql = `CREATE TABLE \`strapi_administrator\` (
  \`id\` int unsigned NOT NULL AUTO_INCREMENT,
  \`firstname\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`lastname\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`username\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`email\` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  \`password\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`resetPasswordToken\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`registrationToken\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`isActive\` tinyint(1) DEFAULT NULL,
  \`blocked\` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (\`id\`),
  UNIQUE KEY \`strapi_administrator_email_unique\` (\`email\`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`;

const createPermissionSql = `CREATE TABLE \`strapi_permission\` (
  \`id\` int unsigned NOT NULL AUTO_INCREMENT,
  \`action\` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  \`subject\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`fields\` longtext COLLATE utf8mb4_unicode_ci,
  \`conditions\` longtext COLLATE utf8mb4_unicode_ci,
  \`role\` int DEFAULT NULL,
  \`created_at\` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  \`updated_at\` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`;

const createRoleSql = `CREATE TABLE \`strapi_role\` (
  \`id\` int unsigned NOT NULL AUTO_INCREMENT,
  \`name\` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  \`code\` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  \`description\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`created_at\` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  \`updated_at\` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (\`id\`),
  UNIQUE KEY \`strapi_role_name_unique\` (\`name\`),
  UNIQUE KEY \`strapi_role_code_unique\` (\`code\`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`;

const insertRoles = `INSERT INTO strapi_role (name, code, description)
VALUES ('Editor', 'strapi-editor', ''),  ('Author', 'strapi-author', '');`

const createUserRoleSql = `CREATE TABLE \`strapi_users_roles\` (
  \`id\` int unsigned NOT NULL AUTO_INCREMENT,
  \`user_id\` int DEFAULT NULL,
  \`role_id\` int DEFAULT NULL,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`;

const createHookSql = `CREATE TABLE \`strapi_webhooks\` (
  \`id\` int unsigned NOT NULL AUTO_INCREMENT,
  \`name\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`url\` longtext COLLATE utf8mb4_unicode_ci,
  \`headers\` longtext COLLATE utf8mb4_unicode_ci,
  \`events\` longtext COLLATE utf8mb4_unicode_ci,
  \`enabled\` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`;

const createUploadSql = `CREATE TABLE \`upload_file\` (
  \`id\` int unsigned NOT NULL AUTO_INCREMENT,
  \`name\` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  \`alternativeText\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`caption\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`width\` int DEFAULT NULL,
  \`height\` int DEFAULT NULL,
  \`formats\` longtext COLLATE utf8mb4_unicode_ci,
  \`hash\` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  \`ext\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`mime\` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  \`size\` decimal(10,2) NOT NULL,
  \`url\` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  \`previewUrl\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`provider\` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  \`provider_metadata\` longtext COLLATE utf8mb4_unicode_ci,
  \`created_by\` int DEFAULT NULL,
  \`updated_by\` int DEFAULT NULL,
  \`created_at\` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  \`updated_at\` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`;

const createFilesSql = `CREATE TABLE \`upload_file_morph\` (
  \`id\` int unsigned NOT NULL AUTO_INCREMENT,
  \`upload_file_id\` int DEFAULT NULL,
  \`related_id\` int DEFAULT NULL,
  \`related_type\` longtext COLLATE utf8mb4_unicode_ci,
  \`field\` longtext COLLATE utf8mb4_unicode_ci,
  \`order\` int DEFAULT NULL,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`;

const createUserPermSql = `CREATE TABLE \`users-permissions_permission\` (
  \`id\` int unsigned NOT NULL AUTO_INCREMENT,
  \`type\` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  \`controller\` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  \`action\` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  \`enabled\` tinyint(1) NOT NULL,
  \`policy\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`role\` int DEFAULT NULL,
  \`created_by\` int DEFAULT NULL,
  \`updated_by\` int DEFAULT NULL,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB AUTO_INCREMENT=217 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`;

const createUserPermRoleSql = `CREATE TABLE \`users-permissions_role\` (
  \`id\` int unsigned NOT NULL AUTO_INCREMENT,
  \`name\` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  \`description\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`type\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`created_by\` int DEFAULT NULL,
  \`updated_by\` int DEFAULT NULL,
  PRIMARY KEY (\`id\`),
  UNIQUE KEY \`users-permissions_role_type_unique\` (\`type\`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`;

const createUserPermUserSql = `CREATE TABLE \`users-permissions_user\` (
  \`id\` int unsigned NOT NULL AUTO_INCREMENT,
  \`username\` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  \`email\` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  \`provider\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`password\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`resetPasswordToken\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`confirmationToken\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`confirmed\` tinyint(1) DEFAULT NULL,
  \`blocked\` tinyint(1) DEFAULT NULL,
  \`role\` int DEFAULT NULL,
  \`created_by\` int DEFAULT NULL,
  \`updated_by\` int DEFAULT NULL,
  \`created_at\` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  \`updated_at\` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (\`id\`),
  UNIQUE KEY \`users-permissions_user_username_unique\` (\`username\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`;

module.exports = [
  createStoreSql,
  createAdminSql,
  createPermissionSql,
  createRoleSql,
  insertRoles,
  createUserRoleSql,
  createHookSql,
  createUploadSql,
  createFilesSql,
  createUserPermSql,
  createUserPermRoleSql,
  createUserPermUserSql,
];
