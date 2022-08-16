import { ReactElement } from "react";

interface MockDataProps {
  data: any;
}

export default function index({ data }: MockDataProps): ReactElement {
  return (
    <div>
      {Object.keys(data).map((key) => (
        <div key={key}>
          <strong>{key}: </strong>
          <span>{data[key]}</span>
        </div>
      ))}
    </div>
  );
}
