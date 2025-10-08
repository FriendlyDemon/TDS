interface ApodCardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}
export default function ApodCard({ data }: ApodCardProps) {
  if (!data) return <p style={{ textAlign: "center" }}>Carregando...</p>;
  return (
    <div style={{ textAlign: "center" }}>
      <h2>{data.title}</h2>
      <p>{data.date}</p>
      {data.media_type == "image" ? (
        <img
          src={data.url}
          alt={data.title}
          style={{ maxWidth: "80%", borderRadius: "10px" }}
        />
      ) : (
        <iframe
          typeof="text/html"
          src={data.url}
          title="video"
          width="560"
          height="315"
          style={{ border: "none", borderRadius: "10px" }}
          allowFullScreen
        />
      )}
    </div>
  );
}
