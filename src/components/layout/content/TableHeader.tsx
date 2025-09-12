export default function TableHeader() {
  return (
    <div className="hidden lg:block bg-white lg:rounded-[30px] py-3 px-4 border-b border-gray-200">
      <div className="flex items-center">
        <div className="w-[400px] text-[12px] font-medium text-gray-700">Data</div>
        <div className="flex-1 flex items-center xl:justify-start justify-end gap-4 pr-16 xl:pl-2">
          <span className="text-[12px] font-medium text-gray-700 w-[90px] text-center">Tag</span>
          <span className="text-[12px] font-medium text-gray-700 w-[60px] text-center">Data</span>
          <span className="text-[12px] font-medium text-gray-700 w-[60px] text-center">Data</span>
          <span className="text-[12px] font-medium text-gray-700 w-[60px] text-center">Data</span>
        </div>
        <div className="w-[60px] text-[12px] font-medium text-gray-700 text-center">Action</div>
      </div>
    </div>
  );
}
