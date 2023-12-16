type Props = {
    sender: string;
};

export default function ChatterChip({ sender }: Props) {
    return (
        <div className="flex justify-start items-center bg-primary-base rounded-full gap-1 p-1 px-3">
            <p className="text-white text-sm lg:text-md 2xl:text-base lowercase">
                {sender}
            </p>
        </div>
    );
}
