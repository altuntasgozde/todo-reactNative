import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [inputvalue, setInputValue] = useState("");

  const [todos, setTodos] = useState([]);

  const AddTodo = (inputvalue) => {
    setTodos((prevTodos) => {
      return [
        {
          textvalue: inputvalue,
          id: Math.random(),
        },
        ...prevTodos,
      ];
    });
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          onChangeText={(val) => setInputValue(val)}
          // defaultValue={text.textvalue}
        />
        <Pressable style={styles.button} onPress={() => AddTodo(inputvalue)}>
          <Text style={styles.text}>Add</Text>
        </Pressable>
      </View>

      <View style={styles.todos}>
        {todos.map((todo) => (
          <View key={todo.id} style={styles.todoWrapper}>
            <Text>{todo.textvalue}</Text>
            <Pressable
              style={styles.todoButton}
              onPress={() => deleteTodo(todo.id)}
            >
              <Text style={styles.text}>Delete</Text>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  wrapper: {
    flexDirection: "row",
  },

  input: {
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  todos: {
    marginTop: 20,
  },

  button: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    borderRadius: 4,
    elevation: 3,
  },

  todoWrapper: {
    flexDirection: "row",
  },

  text: {
    color: "white",
  },

  todoButton: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    elevation: 3,
    marginLeft: 20,
    padding: 5,
  },
});
