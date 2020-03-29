import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },

  incident: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 24,
    marginBottom: 16,
    marginTop: 48
  },

  incidentProperty: {
    color: "#41414d",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 24
  },

  incidentValue: {
    color: "#737380",
    fontSize: 15,
    marginTop: 8
  },

  contactBox: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 24,
    marginBottom: 16
  },

  heroTitle: {
    color: "#13131a",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 30
  },

  heroDescription: {
    color: "#737380",
    fontSize: 15,
    marginTop: 16
  },

  actions: {
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "space-between"
  },

  action: {
    alignItems: "center",
    backgroundColor: "#e02041",
    borderRadius: 8,
    height: 50,
    justifyContent: "center",
    width: "48%"
  },

  actionText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold"
  }
});
