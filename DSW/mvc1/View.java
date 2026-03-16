import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;

public class View extends JFrame {
    JTextField num;
    JLabel visor;
    JButton btn;

    public View(){
        this.setTitle("MVC Exemplo");
        this.setSize(300, 200);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLayout(null);

        num = new JTextField();
        num.setBounds(50, 30, 200, 30);
        this.add(num);
        visor = new JLabel("Resultado");
        visor.setBounds(50, 70, 200, 30);
        this.add(visor);
        btn = new JButton("Calcular");
        btn.setBounds(50, 110, 200, 30);
        this.add(btn);
    }

    public String getNum(){
        return num.getText();
    }

    public void setVisor(String text){
        visor.setText(text);
    }

    public void setBotaoBehavior(ActionListener actionListener){
        btn.addActionListener(actionListener);
    }
}
