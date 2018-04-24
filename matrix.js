class Matrix {
    constructor(rows = 3, columns = 3) {
        this.rows = rows;
        this.columns = columns;
        this.matrix = [];
        this.initMatrix();
    }

    initMatrix() {
        for (let i = 0; i < this.rows; i++) {
            this.matrix[i] = [];
            for (let j = 0; j < this.columns; j++) {
                this.matrix[i][j] = 0;
            }
        }
    }

    printMatrix() {
        console.table(this.matrix);
        return this;
    }

    randomize() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                this.matrix[i][j] = ((Math.random() * 2 - 1));
            }
        }
        return this;
    }

    static add(m, n) {
        if (m instanceof Matrix && n instanceof Matrix) {
            let result = new Matrix(m.rows, m.columns);
            for (let i = 0; i < result.rows; i++) {
                for (let j = 0; j < result.columns; j++) {
                    result.matrix[i][j] = m.matrix[i][j] + n.matrix[i][j];
                }
            }

            return result;
        }
    }

    add(m) {
        if (m instanceof Matrix) {
            for(let i = 0 ; i < this.rows ; i++){
                for(let j = 0 ; j < this.columns ; j++){
                    this.matrix[i][j] += m.matrix[i][j];    
                }
            }
        } else {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.columns; j++) {
                    this.matrix[i][j] += m;
                }
            }
            return this;
        }
    }

    static subtract(a, b) {
        if (a instanceof Matrix && b instanceof Matrix) {
            let result = new Matrix(a.rows, a.columns);
            for (let i = 0; i < result.rows; i++) {
                for (let j = 0; j < result.columns; j++) {
                    result.matrix[i][j] = a.matrix[i][j] - b.matrix[i][j];
                }
            }
            return result;
        }
        throw err;
    }

    subtract(m) {
        if (m instanceof Matrix) {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.columns; j++) {
                    this.matrix[i][j] -= m.matrix[i][j];
                }
            }
        } else {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.columns; j++) {
                    this.matrix[i][j] -= m;
                }
            }
        }
        return this;
    }


    static multiply(m, n) {
        if (m instanceof Matrix && n instanceof Matrix) {

            let result = new Matrix(m.rows, n.columns);
            for (let i = 0; i < result.rows; i++) {
                for (let j = 0; j < result.columns; j++) {
                    for (let x = 0; x < m.columns; x++) {
                        result.matrix[i][j] += m.matrix[i][x] * n.matrix[x][j];
                    }
                }
            }

            return result;
        }
    }

    multiply(scaler) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                this.matrix[i][j] *= scaler;
            }
        }
        return this;
    }

    transpose() {
        let result = new Matrix(this.columns, this.rows);
        for (let i = 0; i < result.rows; i++) {
            for (let j = 0; j < result.columns; j++) {
                result.matrix[i][j] = this.matrix[j][i]
            }
        }
        return result;
    }

    map(func) {
        let newMatrix = new Matrix(this.rows, this.columns);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                let result = this.matrix[i][j];
                newMatrix.matrix[i][j] = func(result)
            }
        }

        return newMatrix;
    }

    static fromArray(a) {
        if (a instanceof Array) {
            let result = new Matrix(a.length, 1);
            for (let i = 0; i < a.length; i++) {
                result.matrix[i][0] = a[i];
            }
            return result;
        }
    }

    static toArray(a) {
        if (a instanceof Matrix) {
            let result = [];
            for (let i = 0; i < a.rows; i++) {
                result.push(a.matrix[i][0])
            }
            return result;
        }
        throw err;
    }

}