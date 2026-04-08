export default function AdBanner({ title, id, src }: { title?: string, id?: string, src?: string }) {
  return (
    <div className="w-full flex flex-col items-center justify-center py-6 bg-gray-50 dark:bg-neutral-900/30 border-y border-border-light dark:border-border-dark my-4">
      {title && (
        <span className="text-xs text-muted-light dark:text-muted-dark uppercase tracking-wider mb-3">
          {title}
        </span>
      )}
      <div className="overflow-hidden max-w-full flex justify-center">
        <iframe
          src={src || "https://www.trip.com/partners/ad/SB15271076?Allianceid=7974128&SID=300882170&trip_sub1=%E7%AC%AC%E6%AF%94%E5%88%A9%E6%96%AF"}
          style={{ width: "728px", height: "90px", border: "none" }}
          frameBorder="0"
          scrolling="no"
          id={id || "SB15271076"}
          title={title || "Advertisement"}
        />
      </div>
    </div>
  );
}