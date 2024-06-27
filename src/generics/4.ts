type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
    };
    
    function createOrUpdateUser(initialValues: Partial<User>) : User {
    // Оновлення користувача
    const baseUser : User = {
        name: "",
        surname: "",
        email: "",
        password: ""
    };
    return {...baseUser, ...initialValues};
    }
    
    createOrUpdateUser({ 
      email: 'user@mail.com', 
      password: 'password123' 
    });
    