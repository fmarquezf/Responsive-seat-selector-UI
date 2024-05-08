import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, CircularProgress} from "@nextui-org/react";
import { $seatStore, $PaymentCompleted } from "../stores/seatStore";
import { useStore } from "@nanostores/react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
    const seatStore = useStore($seatStore);
    const Disabled = seatStore == 0 ? true : false;
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [visible, setVisible] = useState(false);


    var Paying = () => { 
      setVisible(true);
      $PaymentCompleted.set(true);
      $seatStore.set(0);
      setTimeout(() => {
        $PaymentCompleted.set(false)
        onClose()
        setVisible(false)
      }, 2000)
    }
  return (
    <>
      <div>
        <Button seats={seatStore} onPress={onOpen} isDisabled={Disabled}  color="primary" className=" font-bold" startContent={<div className="flex justify-center items-center relative"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-armchair" width="26" height="26" viewBox="0 0 22 21" strokeWidth="1" stroke="currentColor" fill='#3b82f6' strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" /><path d="M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5 M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 0 1 2 -2" /></svg>
          <span className=" text-xs text-white absolute top-[3px] translate-x-[1.5px] font-medium text-center select-none">{!Disabled && seatStore}</span></div> }>
          Book seat{seatStore > 1 && 's'}
        </Button>
      </div>
        
        <Modal hideCloseButton={visible} isDismissable={false} size="xs" backdrop="opaque" isOpen={isOpen} onClose={onClose}>
        
        <ModalContent>
          {(onClose) => (
            visible ? <ModalBody className=" items-center"><CircularProgress color="success" aria-label="Loading..."
            value={100}
            />
            <motion.div className=" absolute"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ delay: 0.4 }}>
              
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 1 22 22" fill=" #17c964" className="w-10 h-10">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
</svg>
            </motion.div>
            <motion.span initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ delay: 0.6 }}>Your purchase was successful!</motion.span>
            
</ModalBody> :
            <>
              <ModalHeader className="flex flex-col gap-1">The Movie</ModalHeader>
              <ModalBody>
                <ul>
                    <li>
                        Seats purchased: {seatStore}
                    </li>
                    <li>
                        Total price: ${5*seatStore}
                    </li>
                </ul>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={Paying}>
                  Pay
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}