import sqlite3

# Abrir la DB
conn = sqlite3.connect("mi-db-sqlite.sqlite")
cursor = conn.cursor()

# Ver las tablas
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
print(cursor.fetchall())

# Ver los datos de la tabla 'personas'
cursor.execute("SELECT * FROM personas;")
for row in cursor.fetchall():
    print(row)

conn.close()
