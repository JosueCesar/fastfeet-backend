module.exports = {
  dialect: 'postgres',
  host: '198.168.99.100',
  username: 'postgres',
  password: 'docker',
  database: 'fastfeet',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
