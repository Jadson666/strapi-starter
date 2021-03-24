"use strict";
/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/concepts/configurations.html#bootstrap
 */

const TYPE = {
  ADMIN: "admin",
};

const createRole = async (role) => {
  try {
    const { type, code, description, name } = role;
    let roleInstance = await strapi.query("role", type).findOne({ code });
    if (!roleInstance) {
      strapi.log.info(
        `role type ${type}, code ${code} doesn't exists, let's create one.`
      );
      roleInstance = await strapi.query("role", type).create({
        name,
        code,
        description,
      });
    }
    return roleInstance;
  } catch (error) {
    strapi.log.error(
      `fail to create role ${role.type}. ${JSON.stringify(role)}`,
      error
    );
    if (role.type === TYPE.ADMIN) throw new Error(error);
  }
};

module.exports = async () => {
  const params = {
    username: process.env.ADMIN_USER,
    password: process.env.ADMIN_PASS,
    firstname: process.env.ADMIN_USER,
    lastname: process.env.ADMIN_USER,
    email: process.env.ADMIN_EMAIL,
    blocked: false,
    isActive: true,
  };
  //Check if any account exists.
  const admins = await strapi.query("user", "admin").find();
  if (admins.length === 0) {
    try {
      let tempPass = params.password;
      params.password = await strapi.admin.services.auth.hashPassword(
        params.password
      );

      let adminRole = await createRole({
        type: TYPE.ADMIN,
        name: "Super Admin",
        code: "strapi-super-admin",
        description:
          "Super Admins can access and manage all features and settings.",
      });

      params.roles = [adminRole.id];
      await strapi.query("user", TYPE.ADMIN).create({
        ...params,
      });
      strapi.log.info("Admin account was successfully created.");
      strapi.log.info(`Email: ${params.email}`);
      strapi.log.info(`Password: ${tempPass}`);
    } catch (error) {
      strapi.log.error(
        `Couldn't create Admin account during bootstrap: `,
        error
      );
    }
  } else {
    strapi.log.info("Admin account already exist.");
  }
};
