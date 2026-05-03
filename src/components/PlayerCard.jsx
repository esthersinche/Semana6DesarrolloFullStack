function PlayerCard({ player, onClick }) {
    return (
        <div
            onClick={onClick}
            className="bg-white border-2 border-black p-3 cursor-pointer hover:shadow-xl transition"
        >
            <div className="flex gap-3">

                <img
                    src={player.image}
                    alt={player.name}
                    className="w-20 h-20 object-cover"
                />

                <div>
                    <h3 className="font-bold">
                        {player.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                        {player.team}
                    </p>

                    <p className="text-sm">
                        #{player.number} - {player.position}
                    </p>
                </div>

            </div>
        </div>
    );
}

export default PlayerCard;