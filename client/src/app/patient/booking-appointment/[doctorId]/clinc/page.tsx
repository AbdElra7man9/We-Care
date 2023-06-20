import Form from "./Form";


export default function Page({ params }: { params: { doctorId: string } }) {
  const doctorId = params.doctorId

  return (
    <div>
      <Form doctorId={doctorId} />
    </div>
  );
}
