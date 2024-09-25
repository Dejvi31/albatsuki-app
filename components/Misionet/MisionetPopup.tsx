import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import MisionetTabela from "./MisionetTabela";

interface MisionetPopupProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const MisionetPopup: React.FC<MisionetPopupProps> = ({
  isOpen,
  onOpenChange,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg mx-auto">
        <DialogHeader>
          <DialogTitle className="text-center">Misionet e Ditës</DialogTitle>
        </DialogHeader>
        <MisionetTabela />
      </DialogContent>
    </Dialog>
  );
};

export default MisionetPopup;
