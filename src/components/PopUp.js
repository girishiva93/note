import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
} from "react-native";

const PopUp = () => {
  const [saveChangesVisible, setSaveChangesVisible] = useState(true);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={saveChangesVisible}
    >
      <View style={styles.alertContainer}>
        <View style={styles.alertWrapper}>
          <Text style={{ fontSize: 20, color: "#CFCFCF", marginBottom: 30 }}>
            Application Name - Notes App
          </Text>
          <Text style={{ fontSize: 20, color: "#CFCFCF", marginBottom: 30 }}>
            Created By - Shiva Giri
          </Text>
          <Text style={{ fontSize: 20, color: "#CFCFCF", marginBottom: 30 }}>
            Verson - 1.2.3
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  containerOpacity: {
    flex: 1,
    backgroundColor: "#252525",
    borderRadius: 5,
    height: "100%",
    opacity: 0.7,
  },
  alertContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
    borderRadius: 20,
  },
  alertWrapper: {
    width: 390,
    height: 300,
    backgroundColor: "#252525",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PopUp;
