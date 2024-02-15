import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const [_, update] = useState(0);
  const form = useForm({
    defaultValues: {
      num: 1,
    },
    mode: "onChange",
  });

  const values = form.getValues();

  return (
    <div>
      <div style={{ whiteSpace: "pre-wrap" }}>
        getValues: {JSON.stringify(values, null, 2)}
      </div>

      <div style={{ whiteSpace: "pre-wrap" }}>
        isDirty: {form.formState.isDirty.toString()}
      </div>

      <div>
        <button
          onClick={() => {
            form.setValue("num", values.num + 1); // not set shouldDirty option
            update((num) => num + 1);
          }}
        >
          increment
        </button>
      </div>
    </div>
  );
}

export default App;
