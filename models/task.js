module.exports = (secualize, type) => {
    const Task = secualize.define('Task', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: type.STRING,
            allowNull: false
        },
        completed:{
            type: type.BOOLEAN,
            defaultValue: false
        },
    }, {tableName: 'tasks'})
    Task.associate = (models) => {
        Task.belongsTo(models.Folder, { foreingKey: 'id', target_Key: 'id_folder', onDelete: 'cascade', hooks: true});
    }

    return Task;
}