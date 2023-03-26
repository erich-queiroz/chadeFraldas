import sqlite3 from "sqlite3";

const DBSOURCE = "db.sqlite";

const CREATE_TABLE_PRESENTE = `
    CREATE TABLE Presente (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            descricao TEXT,
            valor REAL
        )
`;

const database = new sqlite3.Database(DBSOURCE, (err) => {
    if(err) {
        console.error(err.message);
        
        throw err;
    } else {
        console.log("Conectado com sucesso!");

        database.run(CREATE_TABLE_PRESENTE, (err) => {
            if(err) {
                console.error("Falha na criação da tabela ou a tabela já existe");
            } else {
                console.log("Tabela criada!");
            }
        });
    }
});

export default database;