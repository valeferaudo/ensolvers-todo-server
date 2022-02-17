module.exports = (secualize, type) => {
    const Folder = secualize.define('Folder', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: type.STRING,
            allowNull: false
        }
    }, {tableName: 'folders'})
    
    Folder.associate = (models) => {
        Folder.hasMany(models.Task, {foreingKey: 'id_folder'})
    }

    return Folder;
}