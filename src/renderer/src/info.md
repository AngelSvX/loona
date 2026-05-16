Regla de oro de FSD

# app → pages → widgets → features → entities → shared

Cada capa puede importar de las que están a su derecha, nunca de las que están a su izquierda. Una entity jamás importa de una feature, y una feature jamás importa de una page.