import { Textarea, Container, Button, Text } from "@chakra-ui/react";
import sanitizer from "@aero/sanitizer";
import { useAlert } from "react-alert";

export default function Home() {
  const alert = useAlert();

  function button() {
    let init = document.getElementById("textInitial").value;
    if (!init) return alert.error("Please enter some text to sanitize.");
    let sanitized = sanitizer(init);
    document.getElementById("textarea").value = sanitized;
  }
  const handleClick = (e) => {
    e.target.select();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Container>
        <div className="mb-4">
          <Textarea
            id="textInitial"
            className="text-gray-300"
            placeholder="Enter some text to sanitize"
            resize="none"
          />
          <Button className="my-2" colorScheme="blue" onClick={button}>
            Sanitize
          </Button>
        </div>
        <div>
          <Text className="text-white mb-2">Output:</Text>
          <Textarea
            id="textarea"
            className="text-gray-300"
            onClick={handleClick}
            isReadOnly
            resize="none"
          />
        </div>
      </Container>
    </div>
  );
}
