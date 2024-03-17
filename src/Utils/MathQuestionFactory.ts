interface MathQuestion{
    question: string;
    options: string[];
    answerIndex: number;
    questionType: "classic" | "custom" | "text";
}

class MathQuestionFactory {
  public generateQuestion(type: number): {
    question: string;
    options: string[];
    answerIndex: number;
    questionType: "classic" | "custom" | "text";
  } {
    let question: string;
    let options: string[];
    let answerIndex: number;
    let questionType: "classic" | "custom" | "text" = "classic";
    switch (type) {
      case 1:
        const [a, b, c] = this.generateNRandomNumbers(3, [
          [1, 10],
          [2, 10],
          [2, 10],
        ]);
        question = `${a} + ${b} x ${c} =`;
        options = [
          ((a + b) * c).toString(),
          (a + b + c).toString(),
          (a * b + c).toString(),
          (a + b * c).toString(),
        ];
        answerIndex = 3;
        questionType = "classic";
        break;

      case 2:
        let [a2, b2, c2] = this.generateNRandomNumbers(3, [
          [1, 10],
          [2, 10],
          [2, 10],
        ]);

        while (a2 * b2 > c2) {
          a2 = this.reduceToLimit(a2, 1);
          b2 = this.reduceToLimit(b2, 2);
        }

        question = `${a2} x ${b2} - ${c2} =`;

        options = [
          (a2 * b2 - c2).toString(),
          (a2 * (b2 - c2)).toString(),
          (a2 * b2 + c2).toString(),
          (a2 + b2 - c2).toString(),
        ];
        answerIndex = 0;
        questionType = "classic";
        break;

      case 3:
        let [a3, b3, c3] = this.generateNRandomNumbers(3, [
          [1, 10],
          [2, 10],
          [2, 10],
        ]);

        question = `${a3} + ${c3} x ${b3} ÷ ${c3} =`;
        options = [
          ((a3 + c3 * b3) / c3).toString(),
          (a3 + c3 * b3 * c3).toString(),
          ((a3 * (c3 * b3)) / c3).toString(),
          (a3 + (c3 * b3) / c3).toString(),
        ];

        answerIndex = 3;
        questionType = "classic";

        break;

      case 4:
        let [a4, b4, c4, d4] = this.generateNRandomNumbers(4, [
          [1, 10],
          [2, 41],
          [2, 15],
          [1, 10],
        ]);

        // condition a*c > d
        while (a4 * c4 < d4) {
          d4 = this.reduceToLimit(d4, 1);
        }

        // condition d<c
        while (d4 > c4) {
          d4 = this.reduceToLimit(d4, 1);
        }

        question = `${a4} + ${b4} + ${a4} x ${c4} - ${d4} =`;

        options = [
          (a4 + (b4 + a4) * c4 - d4).toString(),
          (a4 + b4 + a4 * (c4 - d4)).toString(),
          ((a4 + b4 + a4) * c4 - d4).toString(),
          (a4 + b4 + a4 * c4 - d4).toString(),
        ];

        answerIndex = 3;
        questionType = "classic";

        break;

      case 5:
        let [a5, b5, c5] = this.generateNRandomNumbers(3, [
          [4, 20],
          [3, 15],
          [5, 21],
        ]);

        question = `${a5} + ? x ${c5} = ${a5 + b5 * c5}`;
        options = [
          b5.toString(),
          (b5 + 1).toString(),
          (b5 - 1).toString(),
          a5.toString(),
        ];
        answerIndex = 0;
        questionType = "custom";
        break;

      case 6:
        // a + c x b <espacio en blanco>  c = a + c x b ÷ c

        let [a6, b6, c6] = this.generateNRandomNumbers(3, [
          [5, 21],
          [2, 26],
          [3, 16],
        ]);

        question = `${a6} + ${c6} x ${b6} ? ${c6} = ${a6 + (c6 * b6) / c6}`;

        options = ["÷", "+", "-", "x"];

        answerIndex = 0;

        questionType = "custom";

        break;

      case 7:
        // a x d + c x b <espacio en blanco> c = a x d + c x b ÷ c

        let [a7, b7, c7, d7] = this.generateNRandomNumbers(4, [
          [1, 16],
          [2, 16],
          [2, 16],
          [1, 10],
        ]);

        question = `${a7} x ${d7} + ${c7} x ${b7} ? ${c7} = ${
          a7 * d7 + (c7 * b7) / c7
        }`;

        options = ["÷", "+", "-", "x"];

        answerIndex = 0;

        questionType = "custom";
        break;

      case 8:
        // a + b x c - d =
        let [a8, b8, c8, d8] = this.generateNRandomNumbers(4, [
          [1, 21],
          [3, 51],
          [4, 31],
          [1, 21],
        ]);

        question = `${a8} + ${b8} x ${c8} - ${d8} =`;

        options = [
          (a8 + b8 * c8 - d8).toString(),
          (a8 + b8 * (c8 - d8)).toString(),
          ((a8 + b8) * (c8 - d8)).toString(),
          (a8 + b8 * c8 + d8).toString(),
        ];
        answerIndex = 0;
        questionType = "classic";
        break;

      case 9:
        // a +   b x c <espacio en blanco> b = a + b x c ÷ b
        let [a9, b9, c9] = this.generateNRandomNumbers(3, [
          [2, 15],
          [2, 10],
          [3, 15],
        ]);

        question = `${a9} + ${b9} x ${c9} ? ${b9} = ${a9 + (b9 * c9) / b9}`;

        options = ["÷", "+", "-", "x"];

        answerIndex = 0;

        questionType = "custom";
        break;

      case 10:
        // a x b + c - d
        let [a10, b10, c10, d10] = this.generateNRandomNumbers(4, [
          [2, 10],
          [2, 10],
          [2, 10],
          [2, 10],
        ]);

        question = `Selecciona la operación que debe realizarse primero para llegar a la respuesta correcta.\n
            ${a10} x ${b10} + ${c10} - ${d10} =`;

        options = [
          `${a10} x ${b10}`,
          `${b10} + ${c10}`,
          `${c10} - ${d10}`,
          `${a10} + ${c10}`,
        ];

        answerIndex = 0;
        questionType = "text";
        break;

      case 11:
        let [a11, b11, c11] = this.generateNRandomNumbers(3, [
          [2, 10],
          [2, 10],
          [3, 10],
        ]);

        let A = this.randomOption(["planetas", "asteroides", "cometas"]);
        let B = this.randomOption(["satélites", "estrellas", "meteoritos"]);

        question = `En una galaxia lejana se observaron distintos cuerpos celestes. Se pudieron distinguir ${a11}  ${A} y ${b11} grupos de ${c11} ${B}. ¿Qué expresión representa mejor la cantidad de astros observados?`;

        options = [
          `${a11} + ${b11} x ${c11}`,
          `${a11} + ${b11} + ${c11}`,
          `${a11} x ${b11} + ${c11}`,
          `${b11} x ${c11} - ${a11}`,
        ];

        answerIndex = 0;

        questionType = "text";

        break;

      case 12:
        // a to f
        let [a12, b12, c12, d12, e12, f12] = this.generateNRandomNumbers(6, [
          [2, 200],
          [2, 100],
          [3, 10],
          [10, 50],
          [10, 50],
          [2, 10],
        ]);
        let A11 = this.randomOption([
          "astronautas",
          "científicos",
          "exploradores espaciales",
        ]);
        question = `Durante un recorrido espacial un grupo de ${A11} recorrieron ${a12} m hacia la parte más externa de la estación y ${b12} m hacia el espacio. Luego dieron ${c12} vueltas a la estación espacial cuya circunferencia mide ${d12} m. Para finalizar exploraron el espacio caminando ${e12} x ${f12} m en ${f12} viajes de la misma longitud. ¿Qué expresión representa mejor la distancia total que recorrieron?`;

        options = [
          `${a12} + ${b12} + ${c12} x ${d12} + ${e12} x ${f12}`,
          `${a12} x ${b12} + ${c12} x ${d12} + ${e12} x ${f12}`,
          `${a12} + ${b12} + ${c12} x ${d12} + ${e12} + ${f12}`,
          `${a12} + ${b12} + ${c12} + ${d12} + ${e12} x ${f12}`,
        ];

        answerIndex = 0;
        questionType = "text";

        break;

      case 13:
        // a + b + a x c - d  =
        let [a13, b13, c13, d13] = this.generateNRandomNumbers(4, [
          [1, 10],
          [2, 41],
          [2, 15],
          [1, 10],
        ]);

        // condition d<c
        while (d13 > c13) {
          d13 = this.reduceToLimit(d13, 1);
        }

        question = `${a13} + ${b13} + ${a13} x ${c13} - ${d13} =`;

        options = [
          (a13 + b13 + a13 * c13 - d13).toString(),
          (a13 + b13 + a13 * (c13 - d13)).toString(),
          (a13 + (b13 + a13) * c13 - d13).toString(),
          (a13 + b13 + a13 * c13 - d13).toString(),
        ];
        answerIndex = 3;
        questionType = "classic";
        break;

      case 14:
        // a x b - c + e x d ÷ e =
        let [a14, b14, c14, d14, e14] = this.generateNRandomNumbers(5, [
          [1, 15],
          [2, 10],
          [2, 10],
          [1, 16],
          [2, 11],
        ]);

        // condition c<a
        while (c14 > a14) {
          c14 = this.reduceToLimit(c14, 1);
        }

        question = `${a14} x ${b14} - ${c14} + ${e14} x ${d14} ÷ ${e14} =`;

        options = [
          (a14 * b14 - c14 + (e14 * d14) / e14).toString(),
          (a14 * (b14 - c14) + (e14 * d14) / e14).toString(),
          (a14 * b14 - (c14 + (e14 * d14) / e14)).toString(),
          (a14 * b14 + c14 + e14 * d14 * e14).toString(),
        ];

        answerIndex = 0;
        questionType = "classic";
        break;

      case 15:
        // a x d + c x b ÷ c  - a + b=
        let [a15, b15, c15, d15] = this.generateNRandomNumbers(4, [
          [1, 16],
          [2, 16],
          [2, 16],
          [1, 10],
        ]);

        question = `${a15} x ${d15} + ${c15} x ${b15} ÷ ${c15} - ${a15} + ${b15} =`;

        options = [
          (a15 * d15 + (c15 * b15) / c15 - a15 + b15).toString(),
          ((a15 * (d15 + c15 * b15)) / c15 - a15 + b15).toString(),
          (a15 + d15 + (c15 * b15) / c15 - a15 + b15).toString(),
          (a15 + d15 + (c15 * b15) / (c15 - a15) + b15).toString(),
        ];

        answerIndex = 0;

        questionType = "classic";
        break;

      case 16:
        //a + b x c =
        let [a16, b16, c16] = this.generateNRandomNumbers(3, [
          [5, 20],
          [6, 25],
          [2, 20],
        ]);

        question = `${a16} + ${b16} x ${c16} =`;

        options = [
          (a16 + b16 * c16).toString(),
          ((a16 + b16) * c16).toString(),
          (a16 + b16 + c16).toString(),
          (a16 * b16 + c16).toString(),
        ];

        answerIndex = 0;
        questionType = "classic";

        break;

      case 17:
        // a to f
        let [a17, b17, c17, d17, e17, f17] = this.generateNRandomNumbers(6, [
          [2, 30],
          [2, 25],
          [3, 10],
          [10, 50],
          [10, 20],
          [2, 10],
        ]);

        d17 = 12;

        // condition a>b
        while (a17 < b17) {
          b17 = this.reduceToLimit(b17, 2);
        }

        // condition f<e
        while (f17 > e17) {
          f17 = this.reduceToLimit(f17, 2);
        }

        let A17 = this.randomOption([
          "satélite",
          "cohete",
          "dispositivo espacial",
          "transbordador",
        ]);

        question = `Un ${A17} realizó ${a17} viajes de prueba en un año, de ellos solo ${b17} fueron exitosos. El año siguiente realizó ${c17} viajes cada mes y todos fueron considerados como exitosos. El último año viajó ${e17} veces y solo ${f17} de esos viajes fueron considerados como no exitosos. ¿Qué expresión representa mejor la cantidad de viajes exitosos realizados por el ${A17}?`;

        options = [
          `${a17} - ${b17} + ${c17} x ${d17} + ${e17} - ${f17}`,
          `${a17} - ${b17} + ${c17}  + ${e17} - ${f17}`,
          `${a17} - ${b17} + ${d17} + ${e17} - ${f17}`,
          `${a17} - ${b17} + ${c17} x ${d17} + ${f17}`,
        ];

        answerIndex = 0;
        questionType = "text";

        break;

      case 18:
        // a x b – c =
        let [a18, b18, c18] = this.generateNRandomNumbers(3, [
          [5, 20],
          [10, 25],
          [4, 15],
        ]);

        question = `${a18} x ${b18} – ${c18} =`;

        options = [
          (a18 * b18 - c18).toString(),
          (a18 * (b18 - c18)).toString(),
          (a18 + b18 - c18).toString(),
          (a18 + b18 + c18).toString(),
        ];
        answerIndex = 0;
        questionType = "classic";
        break;

      case 19:
        // a + <espacio en blanco>  x c = a + b x c
        let [a19, b19, c19] = this.generateNRandomNumbers(3, [
          [4, 20],
          [3, 15],
          [5, 21],
        ]);

        question = `${a19} + ? x ${c19} = ${a19 + b19 * c19}`;

        options = [
          b19.toString(),
          (b19 + 1).toString(),
          (b19 - 1).toString(),
          a19.toString(),
        ];

        answerIndex = 0;
        questionType = "custom";

        break;

      case 20:
        // a <espacio en blanco>  c x b ÷ c = a + c x b ÷ c
        let [a20, b20, c20] = this.generateNRandomNumbers(3, [
          [4, 16],
          [3, 21],
          [4, 13],
        ]);

        question = `${a20} ? ${c20} x ${b20} ÷ ${c20} = ${
          a20 + (c20 * b20) / c20
        }`;

        options = ["÷", "+", "-", "x"];
        answerIndex = 1;
        questionType = "custom";

        break;

      default:
        throw new Error("Unsupported question type");
    }

    // in case option is decimal, round it to 2 decimal places
    options = options.map((option) => {
      if (option.includes(".")) {
        return parseFloat(option).toFixed(2);
      }
      return option;
    });

    return { question, options, answerIndex, questionType };
  }

  public randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public reduceToLimit(n: number, limit: number): number {
    if (n <= limit) {
      return limit;
    }
    return n - 1;
  }

  public randomOption<T>(options: T[]): T {
    return options[Math.floor(Math.random() * options.length)];
  }

  public generateNRandomNumbers(n: number, minMax: number[][]): number[] {
    let randomNumbers: number[] = [];
    for (let i = 0; i < n; i++) {
      let [min, max] = minMax[i];
      randomNumbers.push(this.randomInt(min, max));
    }
    return randomNumbers;
  }

  public generate10RandomQuestions():MathQuestion[] {
    let allQuestions: MathQuestion[] = [];
    for (let i = 0; i < 20; i++) {
      allQuestions.push(this.generateQuestion(i+1));
    }

    let questions: MathQuestion[] = [];

    for (let i = 0; i < 10; i++) {
      let randomIndex = this.randomInt(0, allQuestions.length - 1);
      questions.push(allQuestions[randomIndex]);
      allQuestions.splice(randomIndex, 1);
    }



    return questions;

  }
}

export default MathQuestionFactory;
