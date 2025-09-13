// styles/DrawerStyles.ts
import { StyleSheet } from "react-native";

export const drawerStyles = StyleSheet.create({
  header: {
    backgroundColor: "#0d6ea8",
    padding: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 8,
  },
  logo: { width: 140, height: 36, resizeMode: "contain" },
  items: { flex: 1, paddingTop: 6 },
  footer: { borderTopWidth: 1, borderTopColor: "#eee", paddingVertical: 12 },
  activeItem: { backgroundColor: "#eaf6ff", borderRadius: 30, marginHorizontal: 8 },
});
