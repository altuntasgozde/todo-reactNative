import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [text, setText] = useState({
    textvalue: "",
    id: "",
  });
  const [todos, setTodos] = useState([]);



  const AddTodo = () => {
    setTodos((prevTodos) => {
      return [text, ...prevTodos];
    });
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
    
  }

  useEffect(() => {
    console.log(todos)
  })

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          onChangeText={(newText) =>
            setText({
              textvalue: newText,
              id:Math.floor(Math.random() * 10000) + 1,
            })
          }
          defaultValue={text.textvalue}
        />
        <Pressable style={styles.button} onPress={AddTodo}>
          <Text style={styles.text}>Add</Text>
        </Pressable>
      </View>

      <View style={styles.todos}>
        {todos.map((todo) => (
          <View key={todo.id} style={styles.todoWrapper}>
            <Text>{todo.textvalue}</Text>
            <Pressable style={styles.todoButton} onPress={deleteTodo(todo.id)}>
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
