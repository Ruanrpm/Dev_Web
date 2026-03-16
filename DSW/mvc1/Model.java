public class Model {
    Double num;
    String resultado;

    public Model(){}

    public void setNum(Double num) {
        this.num = num;
    }

    public void calcular(){
        resultado = (num % 2 == 0) ? "Par" : "Ímpar";
    }

    public String getResultado() {
        return resultado;
    }
}
