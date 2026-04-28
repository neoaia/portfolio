interface EndToendDescriptionProps {
    leftSide: string;
    rightSide: string;
}
export const EndToEndDescription = ({ leftSide, rightSide }: EndToendDescriptionProps) => {
    return (
        <div className="flex flex-row justify-between text-md">
            <div className="">
                {leftSide}
            </div>
            <div className="">
                {rightSide}
            </div>
        </div>
    )
};