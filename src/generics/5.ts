export enum UserRole {
        admin = 'admin',
        editor = 'editor',
        guest = 'guest',
    }  

type UserRoleDescription = Record<UserRole, string>;

const RoleDescription : UserRoleDescription = {
        admin: `${UserRole.admin} User`,
        editor: `${UserRole.editor} User`,
       guest: `${UserRole.guest} User`,
    };
    
