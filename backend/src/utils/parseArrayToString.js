module.exports = techs => {
    return techs.split(',')
                .map(tech => tech.trim());
}