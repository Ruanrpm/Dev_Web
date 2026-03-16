
import java.awt.event.ActionListener;

public class Controller {
    Model model;
    View view;

    public Controller(Model model, View view) {
        this.model = model;
        this.view = view;
        this.view.setBotaoBehavior(new Calcular());
    }

    public class Calcular implements ActionListener {
        @Override
        public void actionPerformed(java.awt.event.ActionEvent e) {
            model.setNum(Double.parseDouble(view.getNum()));
            model.calcular();
            view.setVisor(model.getResultado());
        }
    }
}
