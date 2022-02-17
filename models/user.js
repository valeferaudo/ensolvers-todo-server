module.exports = (secualize, type) => {
    const User = secualize.define('User', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: type.STRING,
            allowNull: false
        },
        password:{
            type: type.STRING,
        },
    }, {tableName: 'users'})
    return User;
}