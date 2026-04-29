"use client";

import {
  useState,
  useRef,
  useEffect,
  useId,
  useMemo,
  useCallback,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

function GooeyFilter({ filterId, blur }: { filterId: string; blur: number }) {
  return (
    <svg className="absolute hidden h-0 w-0" aria-hidden>
      <defs>
        <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation={blur}
            result="blur"
          />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
}

function SearchIcon({ layoutId }: { layoutId: string }) {
  return (
    <motion.svg
      layoutId={layoutId}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.2178 16.0616L19.1005 15.3208H19.1005L19.2178 16.0616ZM15.0616 20.2178L14.3208 20.1005V20.1005L15.0616 20.2178ZM5.06107 21.0451L5.50191 20.4383L5.06107 21.0451ZM3.95491 19.9389L4.56168 19.4981L3.95491 19.9389ZM20.0451 19.9389L20.6518 20.3798L20.0451 19.9389ZM18.9389 21.0451L18.4981 20.4383L18.9389 21.0451ZM18.9389 2.95491L18.4981 3.56168L18.9389 2.95491ZM20.0451 4.06107L19.4383 4.50191L20.0451 4.06107ZM5.06107 2.95491L5.50191 3.56168L5.06107 2.95491ZM3.95491 4.06107L4.56168 4.50191L3.95491 4.06107ZM20.9711 16L21.7206 16.0257L20.9711 16ZM15 21.9711L15.0257 22.7206L15 21.9711ZM8 15.25C7.58579 15.25 7.25 15.5858 7.25 16C7.25 16.4142 7.58579 16.75 8 16.75V15.25ZM11 16.75C11.4142 16.75 11.75 16.4142 11.75 16C11.75 15.5858 11.4142 15.25 11 15.25V16.75ZM8 11.25C7.58579 11.25 7.25 11.5858 7.25 12C7.25 12.4142 7.58579 12.75 8 12.75V11.25ZM16 12.75C16.4142 12.75 16.75 12.4142 16.75 12C16.75 11.5858 16.4142 11.25 16 11.25V12.75ZM8 7.25C7.58579 7.25 7.25 7.58579 7.25 8C7.25 8.41421 7.58579 8.75 8 8.75V7.25ZM11 8.75C11.4142 8.75 11.75 8.41421 11.75 8C11.75 7.58579 11.4142 7.25 11 7.25V8.75ZM19.1005 15.3208C16.6401 15.7105 14.7105 17.6401 14.3208 20.1005L15.8023 20.3352C16.0904 18.5166 17.5166 17.0904 19.3352 16.8023L19.1005 15.3208ZM20.25 11V13H21.75V11H20.25ZM3.75 13V11H2.25V13H3.75ZM12 21.25C10.1084 21.25 8.74999 21.249 7.69804 21.135C6.66013 21.0225 6.00992 20.8074 5.50191 20.4383L4.62023 21.6518C5.42656 22.2377 6.37094 22.5 7.53648 22.6263C8.68798 22.751 10.1418 22.75 12 22.75V21.25ZM2.25 13C2.25 14.8582 2.24897 16.312 2.37373 17.4635C2.50001 18.6291 2.76232 19.5734 3.34815 20.3798L4.56168 19.4981C4.19259 18.9901 3.97745 18.3399 3.865 17.302C3.75103 16.25 3.75 14.8916 3.75 13H2.25ZM5.50191 20.4383C5.14111 20.1762 4.82382 19.8589 4.56168 19.4981L3.34815 20.3798C3.70281 20.8679 4.13209 21.2972 4.62023 21.6518L5.50191 20.4383ZM19.4383 19.4981C19.1762 19.8589 18.8589 20.1762 18.4981 20.4383L19.3798 21.6518C19.8679 21.2972 20.2972 20.8679 20.6518 20.3798L19.4383 19.4981ZM12 2.75C13.8916 2.75 15.25 2.75103 16.302 2.865C17.3399 2.97745 17.9901 3.19259 18.4981 3.56168L19.3798 2.34815C18.5734 1.76232 17.6291 1.50001 16.4635 1.37373C15.312 1.24897 13.8582 1.25 12 1.25V2.75ZM21.75 11C21.75 9.14184 21.751 7.68798 21.6263 6.53648C21.5 5.37094 21.2377 4.42656 20.6518 3.62023L19.4383 4.50191C19.8074 5.00992 20.0225 5.66013 20.135 6.69804C20.249 7.74999 20.25 9.10843 20.25 11H21.75ZM18.4981 3.56168C18.8589 3.82382 19.1762 4.14111 19.4383 4.50191L20.6518 3.62023C20.2972 3.13209 19.8679 2.70281 19.3798 2.34815L18.4981 3.56168ZM12 1.25C10.1418 1.25 8.68798 1.24897 7.53648 1.37373C6.37094 1.50001 5.42656 1.76232 4.62023 2.34815L5.50191 3.56168C6.00992 3.19259 6.66013 2.97745 7.69804 2.865C8.74999 2.75103 10.1084 2.75 12 2.75V1.25ZM3.75 11C3.75 9.10843 3.75103 7.74999 3.865 6.69804C3.97745 5.66013 4.19259 5.00992 4.56168 4.50191L3.34815 3.62023C2.76232 4.42656 2.50001 5.37094 2.37373 6.53648C2.24897 7.68798 2.25 9.14184 2.25 11H3.75ZM4.62023 2.34815C4.13209 2.70281 3.70281 3.13209 3.34815 3.62023L4.56168 4.50191C4.82382 4.14111 5.14111 3.82382 5.50191 3.56168L4.62023 2.34815ZM20.25 13C20.25 14.1731 20.2499 15.1456 20.2215 15.9743L21.7206 16.0257C21.7501 15.1658 21.75 14.1648 21.75 13H20.25ZM20.2215 15.9743C20.158 17.8292 19.9509 18.7925 19.4383 19.4981L20.6518 20.3798C21.4537 19.2761 21.6564 17.8991 21.7206 16.0257L20.2215 15.9743ZM20.9711 15.25C20.0888 15.25 19.5579 15.2484 19.1005 15.3208L19.3352 16.8023C19.647 16.7529 20.0338 16.75 20.9711 16.75L20.9711 15.25ZM12 22.75C13.1648 22.75 14.1658 22.7501 15.0257 22.7206L14.9743 21.2215C14.1456 21.2499 13.1731 21.25 12 21.25V22.75ZM15.0257 22.7206C16.8991 22.6564 18.2761 22.4537 19.3798 21.6518L18.4981 20.4383C17.7925 20.9509 16.8292 21.158 14.9743 21.2215L15.0257 22.7206ZM15.75 21.9711C15.75 21.0338 15.7529 20.647 15.8023 20.3352L14.3208 20.1005C14.2484 20.5579 14.25 21.0888 14.25 21.9711L15.75 21.9711ZM8 16.75H11V15.25H8V16.75ZM8 12.75H16V11.25H8V12.75ZM8 8.75H11V7.25H8V8.75Z"
        fill="#fff"
      />
    </motion.svg>
  );
}

function ArrowRightIcon({ layoutId }: { layoutId: string }) {
  return (
    <motion.svg
      layoutId={layoutId}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

const transition = {
  duration: 0.4,
  type: "spring" as const,
  bounce: 0.25,
};

const iconBubbleVariants = {
  collapsed: { scale: 0, opacity: 0 },
  expanded: { scale: 1, opacity: 1 },
};

export interface GooeyInputClassNames {
  root?: string;
  filterWrap?: string;
  buttonRow?: string;
  trigger?: string;
  input?: string;
  bubble?: string;
  bubbleSurface?: string;
}

export interface GooeyInputProps {
  placeholder?: string;
  className?: string;
  classNames?: GooeyInputClassNames;
  /** Collapsed control width in px */
  collapsedWidth?: number;
  /** Expanded control width in px */
  expandedWidth?: number;
  /** Horizontal offset when expanded (px), aligns detached bubbles */
  expandedOffset?: number;
  /** Gaussian blur amount for the gooey SVG filter */
  gooeyBlur?: number;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  onOpenChange?: (open: boolean) => void;
  /** Called with the current search value when the submit button is clicked or Enter is pressed */
  onSubmit?: (value: string) => void;
  disabled?: boolean;
}

export function GooeyInput({
  placeholder = "Type to search...",
  className,
  classNames,
  collapsedWidth = 115,
  expandedWidth = 200,
  expandedOffset = 50,
  gooeyBlur = 5,
  value: valueProp,
  defaultValue = "",
  onValueChange,
  onOpenChange,
  onSubmit,
  disabled = false,
}: GooeyInputProps) {
  const reactId = useId();
  const safeId = reactId.replace(/:/g, "");
  const filterId = `gooey-filter-${safeId}`;
  const iconLayoutId = `gooey-input-icon-${safeId}`;
  const submitIconLayoutId = `gooey-submit-icon-${safeId}`;
  const inputLayoutId = `gooey-input-field-${safeId}`;

  const inputRef = useRef<HTMLInputElement>(null);
  const prevExpandedRef = useRef(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);

  const isControlled = valueProp !== undefined;
  const searchText = isControlled ? valueProp : uncontrolledValue;

  const setSearchText = useCallback(
    (next: string) => {
      if (!isControlled) {
        setUncontrolledValue(next);
      }
      onValueChange?.(next);
    },
    [isControlled, onValueChange],
  );

  const setExpanded = useCallback(
    (next: boolean) => {
      setIsExpanded(next);
      onOpenChange?.(next);
    },
    [onOpenChange],
  );

  useEffect(() => {
    if (isExpanded) {
      inputRef.current?.focus();
    } else if (prevExpandedRef.current) {
      setSearchText("");
    }
    prevExpandedRef.current = isExpanded;
  }, [isExpanded, setSearchText]);

  // The pill shifts right by expandedOffset to make room for the search bubble on the left,
  // and also shifts left internally so the submit bubble on the right doesn't overlap.
  const buttonVariants = useMemo(
    () => ({
      collapsed: { width: collapsedWidth, marginLeft: 0, marginRight: 0 },
      expanded: {
        width: expandedWidth,
        marginLeft: expandedOffset,
        marginRight: expandedOffset,
      },
    }),
    [collapsedWidth, expandedWidth, expandedOffset],
  );

  // Submit bubble sits to the right, mirroring the search bubble on the left.
  const submitBubbleVariants = useMemo(
    () => ({
      collapsed: { scale: 0, opacity: 0, x: -expandedOffset },
      expanded: { scale: 1, opacity: 1, x: 0 },
    }),
    [expandedOffset],
  );

  const handleExpand = useCallback(() => {
    if (!disabled) setExpanded(true);
  }, [disabled, setExpanded]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.target.value);
    },
    [setSearchText],
  );

  const handleBlur = useCallback(() => {
    if (!searchText) setExpanded(false);
  }, [searchText, setExpanded]);

  const handleSubmit = useCallback(() => {
    if (!searchText.trim()) return;
    onSubmit?.(searchText);
    setExpanded(false);
  }, [searchText, onSubmit, setExpanded]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleSubmit();
      } else if (e.key === "Escape") {
        setExpanded(false);
      }
    },
    [handleSubmit, setExpanded],
  );

  const surfaceClass =
    "bg-linear text-foreground shadow-sm ring-1 ring-border/60";

  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        className,
        classNames?.root,
      )}
    >
      <GooeyFilter filterId={filterId} blur={gooeyBlur} />

      <div
        className={cn(
          "relative flex h-10 items-center justify-center",
          classNames?.filterWrap,
        )}
        style={{ filter: `url(#${filterId})` }}
      >
        {/* ── Main pill ── */}
        <motion.div
          className={cn(
            "flex h-10 items-center justify-center",
            classNames?.buttonRow,
          )}
          variants={buttonVariants}
          initial="collapsed"
          animate={isExpanded ? "expanded" : "collapsed"}
          transition={transition}
        >
          <button
            type="button"
            disabled={disabled}
            onClick={handleExpand}
            className={cn(
              "flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-full px-4 text-sm font-medium outline-none transition-[color,box-shadow] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
              surfaceClass,
              classNames?.trigger,
            )}
          >
            {!isExpanded ? <SearchIcon layoutId={iconLayoutId} /> : null}
            <motion.input
              layoutId={inputLayoutId}
              ref={inputRef}
              type="search"
              enterKeyHint="search"
              autoComplete="off"
              value={searchText}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              disabled={disabled || !isExpanded}
              placeholder={placeholder}
              className={cn(
                "h-full min-w-0 flex-1 bg-transparent text-sm text-background outline-none",
                isExpanded
                  ? "placeholder:text-background/50 dark:placeholder:text-background/45"
                  : "pointer-events-none placeholder:text-background/80 dark:placeholder:text-background/70",
                classNames?.input,
              )}
            />
          </button>
        </motion.div>

        {/* ── Left detached bubble: search icon ── */}
        <motion.div
          className={cn(
            "absolute top-1/2 left-0 flex size-10 -translate-y-1/2 items-center justify-center",
            classNames?.bubble,
          )}
          variants={iconBubbleVariants}
          initial="collapsed"
          animate={isExpanded ? "expanded" : "collapsed"}
          transition={transition}
        >
          <div
            className={cn(
              "flex size-10 items-center justify-center rounded-full",
              surfaceClass,
              classNames?.bubbleSurface,
            )}
          >
            <SearchIcon layoutId={iconLayoutId} />
          </div>
        </motion.div>

        {/* ── Right detached bubble: submit / arrow icon ── */}
        <motion.div
          className={cn(
            "absolute top-1/2 right-0 flex size-10 -translate-y-1/2 items-center justify-center",
            classNames?.bubble,
          )}
          variants={submitBubbleVariants}
          initial="collapsed"
          animate={isExpanded ? "expanded" : "collapsed"}
          transition={transition}
        >
          <button
            type="button"
            disabled={disabled || !isExpanded}
            onClick={handleSubmit}
            aria-label="Submit search"
            className={cn(
              "flex size-10 cursor-pointer items-center justify-center rounded-full outline-none transition-[color,box-shadow] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
              surfaceClass,
              classNames?.bubbleSurface,
            )}
          >
            <ArrowRightIcon layoutId={submitIconLayoutId} />
          </button>
        </motion.div>
      </div>
    </div>
  );
}