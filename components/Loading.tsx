import {
  CircularProgress,
  Dialog,
  DialogContent,
  DialogProps,
  Typography,
} from "@mui/material";

export default function Loading({
  label,
  ...props
}: DialogProps & { label?: string }) {
  return (
    <Dialog {...props}>
      <DialogContent sx={{ display: "flex", alignItems: "center" }}>
        <CircularProgress sx={{ marginRight: 2 }} />
        <Typography variant="h6">{label}</Typography>
      </DialogContent>
    </Dialog>
  );
}
