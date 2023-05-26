"use client";
import CreateButton from "@/components/UI/Buttons/CreateButton";
import CustomModal from "@/components/CustomModal/CustomModal";
import { useState } from "react";

export default function ExampleModal () {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    
    return (
        <div>
            <CreateButton color="blue" onClick={openModal}>
                Open Modal
            </CreateButton>
            <CustomModal closeModal={closeModal} modalIsOpen={modalIsOpen}>
                <h2>Hello</h2>
                <div>I am a modal</div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae quos excepturi aliquam, reprehenderit quisquam
                    asperiores quidem totam praesentium et ducimus molestias
                    iusto culpa commodi repellat debitis illum similique ex
                    neque? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Magni expedita fugit
                    suscipit optio sint eum voluptatem est ullam illum,
                    pariatur, iure dolorum praesentium temporibus aliquid. Dicta
                    blanditiis eum quae obcaecati earum voluptatibus iste est
                    voluptatem minus sit, dignissimos inventore quasi eaque
                    necessitatibus sequi id odit impedit vero! Delectus, laborum
                    doloribus. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Sed numquam, eum harum dolore
                    reprehenderit recusandae! Corrupti laborum voluptas saepe
                    debitis dolor quo voluptatem assumenda unde fugiat nesciunt
                    accusamus cum, enim aliquam temporibus a eos facilis quos
                    voluptatum similique soluta cupiditate est in, impedit
                    quaerat? Harum, doloremque quam modi, commodi nesciunt culpa
                    rem quaerat ducimus, soluta perferendis facilis! Omnis porro
                    consequuntur corrupti id reprehenderit minus impedit eius
                    recusandae optio hic doloribus nostrum corporis molestiae
                    quam sit quis nisi, exercitationem eaque dignissimos! Culpa
                    beatae, recusandae quas commodi doloribus quaerat corporis
                    veniam vel, adipisci tenetur hic sunt magnam fuga eum.
                    Iusto, voluptatibus alias.
                </div>
                <CreateButton color="red" onClick={closeModal}>
                    close
                </CreateButton>
            </CustomModal>
        </div>
    )
}