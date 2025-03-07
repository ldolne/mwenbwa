import React from "react";
import iconRules from "./img/parchment-icon-white-purple.png"
function Rules() {
    return (
        <div className="modal-div center-modal flex-col pad-med border bgc-prim">
            <div className="rules-img">
                <img src={iconRules} alt=""></img>
            </div>
            <div className="rules-text">
                <h2 className="text-align-center">Game Rules</h2>
                <p>
                    Dear capitalist, welcome to WoodWars! Your goal become the
                    wealthiest forest owner by winning an economic war involving
                    trees. Because what&apos;s the point of nature if it&apos;s not
                    profit?
                </p>
                <p>
                    Buy trees to achieve that goal. Each tree generates leaves over
                    time, which allows you to buy even more trees! You can even buy
                    the trees of other players, if you&apos;re willing to pay the
                    price. But beware, other players can also buy your trees. To
                    avoid this, you can lock your trees (for a certain price of
                    course).
                </p>
                <p>
                    Every 15 minutes you receive a number of leaves proportional to
                    the total of the trees you own. And every hour, you lose half of
                    your leaves.
                </p>
                <p>
                    Check to leaderboard to compare your wealth to the top
                    capitalists.
                </p>
            </div>
        </div>
    );
}

export default Rules;
