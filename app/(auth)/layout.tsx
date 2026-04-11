export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="auth-layout">
      {/* Animated background blobs */}
      <div className="auth-bg-blob auth-bg-blob-1" />
      <div className="auth-bg-blob auth-bg-blob-2" />
      <div className="auth-bg-blob auth-bg-blob-3" />

      <div className="auth-container">{children}</div>
    </div>
  );
}
